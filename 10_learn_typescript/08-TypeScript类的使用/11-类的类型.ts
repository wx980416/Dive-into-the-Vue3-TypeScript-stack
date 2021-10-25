// 类本身也是可以作为一种数据类型的

class Person {
  name: string = 'wangxin'
  eating() {}
}

const p = new Person()

const p1: Person = {
  name: 'wangxin223355',
  eating() {},
}

function printPerson(p: Person) {
  console.log(p.name)
}
printPerson(new Person())
printPerson({ name: 'wanasdfn', eating: function () {} })

export {}
