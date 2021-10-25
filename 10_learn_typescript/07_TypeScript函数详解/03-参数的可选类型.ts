// 可选类型必须是在必选参数的后面
// x: number, y?: number
// y --> undefined | number 本质上 只是不是必须要传的
function foo(x: number, y?: number) {
  console.log(x, y)
}
foo(100, 200)
foo(300)
