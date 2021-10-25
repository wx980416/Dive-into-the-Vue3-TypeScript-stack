// 类型别名来定义函数
// type CalcFn = (n1: number, n2: number) => number

// 接口定义
interface CalcFn {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calc: CalcFn) {
  return calc(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

calc(20, 30, add)
