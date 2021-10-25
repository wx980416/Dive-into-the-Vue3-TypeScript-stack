// 默认推导 隐式绑定
const info = {
  name: 'wx',
  eating() {
    console.log(this.name + 'eating')
  },
}

info.eating()

// 指定this 显示绑定
function logNum(this: { num: string }, a2: string) {
  console.log(this.num)
  console.log(a2)
}
logNum.call({ num: '111' }, 'adadad')
export {}
