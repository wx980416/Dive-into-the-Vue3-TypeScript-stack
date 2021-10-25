class Person {
  private name: string = ''

  getName() {
    return this.name
  }

  setName(newValue: string) {
    this.name = newValue
  }
}

const p = new Person()
// console.log(p.name) 属性“name”为私有属性，只能在类“Person”中访问
// p.name = 'wangxin'
p.setName('wangxin')
console.log(p.getName())

export {}
