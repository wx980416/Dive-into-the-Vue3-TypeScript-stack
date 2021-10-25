// 剩余参数
// ...nums: number[]
// firstnum 第一个参数
function sum(firstnum: number, ...nums: number[]) {
  let total = firstnum
  for (const num of nums) {
    total += num
  }
  return total
}
console.log(sum(10, 20))

console.log(sum(10, 20, 30, 40))
