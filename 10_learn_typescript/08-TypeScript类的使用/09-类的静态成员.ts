class Student {
  static time: string = '23:00'

  static attendClass() {
    console.log('去学习')
  }
}

// 类的静态属性和方法是可以直接访问的
console.log(Student.time)
Student.attendClass()
