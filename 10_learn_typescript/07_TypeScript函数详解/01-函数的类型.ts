function foo() {}

// 函数注解
type FooFnType = () => void

// function bar(fn: () => void) {
//   fn()
// }
function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// add: (num1: number, num2: number) => void 函数类型
// const add: (num1: number, num2: number) => void = (num1: number, num2: number) => {
//   return num1 + num2
// }
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2
}
