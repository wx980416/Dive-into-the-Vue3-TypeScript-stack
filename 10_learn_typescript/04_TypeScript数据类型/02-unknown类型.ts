// 不能推导出类型注解时

let result1: any // any 太灵活了
let result2: unknown
let result3: string = 'string'

result1 = result2
// 不能将 unknown 赋值给 除any和unknown类型外的类型
// result3 = result2

export {}
