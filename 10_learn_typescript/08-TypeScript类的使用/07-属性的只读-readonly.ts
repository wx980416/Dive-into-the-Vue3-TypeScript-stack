// 如果有一个属性我们不希望外界可以任意的修改，
// 只希望确定值后直接使用，那么可以使用readonly
class Person {
  readonly name: string
  readonly friend?: Person
  age?: number

  // 属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('wangxin', new Person('wuyusi'))
console.log(p.name)
console.log(p.friend)

if (p.friend) {
  p.friend.age = 22
}
console.log(p.friend) // 修改了
