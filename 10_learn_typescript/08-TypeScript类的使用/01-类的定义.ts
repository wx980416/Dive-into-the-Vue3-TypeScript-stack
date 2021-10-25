class Person {
  name: string = ''
  age: number = 0

  eating() {
    console.log(this.name + ' eating')
  }

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p = new Person('wangxin', 23)
console.log(p)
console.log(p.name)
console.log(p.age)
p.eating()
