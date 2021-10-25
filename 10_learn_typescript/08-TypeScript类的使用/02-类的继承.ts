class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log('eat Person')
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  // 重写
  eat() {
    // 调用父类方法
    super.eat()
    console.log('eat Student')
  }
}

class Teacher extends Person {
  title: string

  constructor(name: string, age: number, title: string) {
    super(name, age)
    this.title = title
  }

  // 重写
  eat() {
    // 调用父类方法
    super.eat()
    console.log('eat')
  }
  teaching() {
    console.log('teaching')
  }
}

const stu = new Student('wangxin', 23, 2312321)
console.log(stu)
stu.eat()

export {}
