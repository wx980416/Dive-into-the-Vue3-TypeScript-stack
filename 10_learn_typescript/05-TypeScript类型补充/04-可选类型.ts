function printObj(obj: { name: string; age?: number }) {
  console.log(obj.name)
  console.log(obj.age)
}

const obj1 = {
  name: 'wangxin',
}

const obj2 = {
  name: 'wangxin2',
  age: 23,
}

printObj(obj1)
printObj(obj2)

export {}
