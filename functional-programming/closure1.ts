/**
 * 闭包
 */
// function applyMiddleware(...middlewares) {
//   return createStore => (reducer, ...args) => {
//     const store = createStore(reducer, ...args)
//     let dispatch = () => {
//       throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.')
//     }
//     const middlewareAPI = {
//       getState: store.getState,
//       dispatch: (action, ...args) => dispatch(action, ...args),
//     }
//     const chain = middlewares.map(middleware => middleware(middlewareAPI))
//     dispatch = compose(...chain)(store.dispatch)
//     return {
//       ...store,
//       dispatch,
//     }
//   }
// }

type middlewareAPIType<T> = {
  dispatch: (...arg: T[]) => T[]
}
function applyMiddleware() {
  let dispatch = (...args: any[]) => {
    console.log('start - 我是原始的 ', args)
    return args
  }
  const middlewareAPI = {
    dispatch: (...args: any) => dispatch(...args),
  }
  function prepare(m: middlewareAPIType<any>) {
    return function res() {
      m.dispatch('what')
    }
  }

  const res = prepare(middlewareAPI)

  dispatch = (...args: any[]) => {
    console.log('end 我是更改后的 dispatch ', args)
    return args
  }

  return res
}
applyMiddleware()()
