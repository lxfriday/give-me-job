比较下面这几个的执行顺序

- `setTimeout`
- `setInterval`
- `setImmediate`
- `new Promise(cb)` 和 `promise.then(cb)`(`promise` 是 `Promiose` 的实例)
- `process.nextTick`(nodejs)

还有一些另外的

- `MutaionObserver` microTask(浏览器)
- `socket.on('close', cb)` close callback(nodejs)
- `fs.readFile` I/O (nodejs)

## 分类

### 同步执行

`new Promise(cb)` `cb` 代码会同步执行，其实不属于考虑范畴了

### microTask 微任务

- `process.nextTick` tickTask
- `promise.then(cb)` microTask

在同一个事件循环里面，microTask 永远比 macroTask 中的任务先执行，而且 microTask 在本次循环全部执行完。

**microTask （在 nodejs）可以进一步划分为 tickTask 和 microTask，都是任务队列，先进先执行**

优先级是 **tickTask** > **microTask**

### macroTask 宏任务

- `setTimeout`
- `setInterval` 优先级同 `setTimeout`，谁先被推到宏任务队列谁就先执行
- `setImmediate`

一次只会从队列里面拿出一个执行，执行完就执行 microTask 去了。

这里有一个非确定情况，`setImmediate` 和 `setTimeout` 的执行顺序在 nodejs 中不是固定的（nodejs 开发者这么说），但是在 I/O 的回调中它是确定的。

> For example, if we run the following script which is not within an I/O cycle (i.e. the main module), the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process

- 浏览器中 `setImmediate` 永远比 `setTimeout` 先执行
- nodejs 中，在 I/O 回调中 `setImmediate` 比 `setTimeout` 先，在代码最外层 `setTimeout` 比 `setImmediate` 快

做个测试

```js
setTimeout(() => {
  console.log('setTimeout 1')
  setTimeout(() => {
    console.log('setTimeout 2')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate 2')
  })
}, 0)
setImmediate(() => {
  console.log('setImmediate 1')
})
```

nodejs

```
setTimeout 1
setImmediate 1
setImmediate 2 // 在 setTImeout 内部就开始变脸了!!!
setTimeout 2
```

浏览器

```
setImmediate 1
setTimeout 1
setImmediate 2
setTimeout 2
```

浏览器执行非常稳定，nodejs 混乱，但在回调中执行时会和模型一致。

可以把顺序指定为 `setImmediate` > `setTimeout` = `setInterval`

`setTimeout` 还有一个隐形前提，它的第二个参数，也就是 delay 延迟执行的时间，最小是 **4ms**，即使指定的 0。

`setInterval` 回调内如果是一个 `while` 循环，即使时间设定的 1,它也不会推无限多个回调到宏任务队列中，而是要等到这个执行完，才会把下一个回调推入宏任务，用 `while` 执行 2S 之后，清除掉 interval，发现回调只执行了一次，而不是推 2000 / 1 次回调函数。

看下面的例子

```js
let count = 0
setTimeout(() => {
  console.log('timeout before')
}, 0)
const i = setInterval(() => {
  console.log('interval')
  count++
  if (count === 5) {
    clearInterval(i)
  }
  setTimeout(() => {
    console.log('timeout in interval ', count)
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timeout end')
}, 0)
```

```
timeout before
interval
timeout end
timeout in interval  1
interval
timeout in interval  2
interval
timeout in interval  3
interval
timeout in interval  4
interval
timeout in interval  5
```

## nodejs 事件循环

```
   ┌───────────────────────────┐
┌─>│           timers          │ setTimeout setInterval setImmediate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ I/O 除了另外几种之外的几乎所有回调
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ 内部使用（忽略）
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ setImmediate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ 类似 socket.on('close', ...) 的 close 回调
   └───────────────────────────┘
```

**上述基本都是 macroTask 宏任务，宏任务的特点是执行完一个之后必然会去执行 microTask 微任务，并会把微任务执行完之后再继续下一个高优先级的宏任务，所以它的优先级比较低！切换到微任务时，如果 tickTask 队列有回调，则会执行完，然后看 microTask 普通微任务，如果有也是会执行完，然后再从 macroTask 宏任务中取一个出来继续上述的过程。**

还有一个注意点就是上面的 **并会把微任务执行完之后再继续下一个高优先级的宏任务**，看下面代码

```js
setTimeout(() => {
  console.log('setTimeout 1, why I am so late')
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
  })
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
  })
}, 0)
```

结果是

```
setTimeout 1, why I am so late
setImmediate in setTimeout
setImmediate in setTimeout
setTimeout in setTimeout
setTimeout in setTimeout
```

说明在同一时间循环内， check 队列会执行完之后再去执行 timers 队列，如果中间插了一个 microTask，那就先去执行 microTask ，再回来执行 check 再 timers。

```js
setTimeout(() => {
  console.log('setTimeout 1, why I am so late')
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
    process.nextTick(() => {
      console.log('nextTick in setImmediate')
    })
    new Promise(res => res()).then(() => {
      console.log('promise in setImmediate')
    })
  })
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
  })
}, 0)
```

执行结果，两个 `setImmediate` 被放到 check 队列，check 队列中的 `setImmediate` 要先全部执行完，然后再下一步，而下一步过程中 microTask 就会执行

```
setTimeout 1, why I am so late
setImmediate in setTimeout
setImmediate in setTimeout
nextTick in setImmediate
promise in setImmediate
setTimeout in setTimeout
setTimeout in setTimeout
```

注意下面代码

```js
setTimeout(() => {
  console.log('setTimeout 1, why I am so late')
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
  })
  new Promise(res => res()).then(() => {
    console.log('promise in setImmediate')
  })
  process.nextTick(() => {
    console.log('nextTick in setImmediate')
  })
  setTimeout(() => {
    console.log('setTimeout in setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate in setTimeout')
  })
}, 0)
```

执行结果

```
setTimeout 1, why I am so late
nextTick in setImmediate
promise in setImmediate
setImmediate in setTimeout
setImmediate in setTimeout
setTimeout in setTimeout
setTimeout in setTimeout
```
