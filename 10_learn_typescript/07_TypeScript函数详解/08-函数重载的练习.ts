// 实现获取字符串和数组的长度函数
// 1.使用联合类型来实现
function getLength1(args: string | any[]) {
  return args.length
}

// 2.使用函数的重载
function getLength(args: string): number
function getLength(args: any[]): number

function getLength(args: any): number {
  return args.length
}

console.log(getLength1('abc'))
console.log(getLength1([123, 123, 123]))
console.log(getLength('abc'))
console.log(getLength([123, 123, 123]))
