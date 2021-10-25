type Person = {
  name: String
  friend?: {
    name: string
    age?: number
  }
}

const me: Person = {
  name: 'wangxin',
}

console.log(me.name)
// ?. 可选链 短路 返回 undefined
console.log(me.friend?.name)
console.log(me.friend?.age)
