function printObj(obj: { name: string; age: number }) {
  console.log(obj.name)
  console.log(obj.age)
}

const obj = {
  name: 'wangxin',
  age: 23,
}

printObj(obj)
export {}
