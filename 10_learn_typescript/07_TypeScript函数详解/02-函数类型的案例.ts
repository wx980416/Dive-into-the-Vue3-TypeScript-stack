function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}

const result = calc(100, 200, function (a1, a2) {
  return a1 + a2
})
console.log(result)

const result2 = calc(100, 200, function (a1, a2) {
  return a1 * a2
})
console.log(result2)
