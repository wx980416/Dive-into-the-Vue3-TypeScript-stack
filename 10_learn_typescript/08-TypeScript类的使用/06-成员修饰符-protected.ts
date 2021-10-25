class Person {
  protected name: string = 'wangxin'
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const p = new Person()
// p.name = 'wangxin' // protected: 在类内部和子类中可以访问

const stu = new Student()
console.log(stu.getName())

export {}
