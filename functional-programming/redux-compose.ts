type composeFunc = <T>(args: T) => T

export default function compose(...funcs: composeFunc[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
const f1: composeFunc = args => {
  console.log('f1', args)
  return args
}
const f2: composeFunc = args => {
  console.log('f2', args)
  return args
}
const f3: composeFunc = args => {
  console.log('f3', args)
  return args
}
const f4: composeFunc = args => {
  console.log('f4', args)
  return args
}
const c = compose(
  f1,
  f2,
  f3,
  f4
)
const res = c('hello')
console.log('res', res)
