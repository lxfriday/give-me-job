// // micro
// // process.nextTick

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

// setImmediate(() => {
//   console.log('setImmediate')
// })

// process.nextTick(function() {
//   console.log('nextTick 1')
// })

// setImmediate(() => {
//   console.log('setImmediate')
// })

// setTimeout(() => {
//   console.log('setTimeout 2')
// }, 0)

// process.nextTick(function() {
//   console.log('nextTick 2')
// })

// new Promise(res => {
//   console.log('promise')
//   res()
// }).then(() => {
//   console.log('then')
// })

// process.nextTick(function() {
//   console.log('nextTick 3')
// })

// setTimeout(() => {
//   console.log('before setTimeout')
// }, 0)

// let count = 0

// let i = setInterval(() => {
//   console.log('setInterval')
//   clearInterval(i)
// }, 1)

// setTimeout(() => {
//   console.log('end setTimeout')
// }, 0)

// let count = 0
// setTimeout(() => {
//   console.log('timeout before')
// }, 0)

// const i = setInterval(() => {
//   console.log('interval')
//   count++
//   if (count === 5) {
//     clearInterval(i)
//   }

//   setTimeout(() => {
//     console.log('timeout in interval ', count)
//   }, 0)
// }, 0)

// setTimeout(() => {
//   console.log('timeout end')
// }, 0)
