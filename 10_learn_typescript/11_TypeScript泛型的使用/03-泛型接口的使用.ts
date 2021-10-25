interface IPerson<T1, T2> {
  name: T1
  age: T2
}

const p: IPerson<string, number> = {
  name: 'wangxin',
  age: 23,
}

interface IPerson2<T1 = string, T2 = number> {
  name: T1
  age: T2
}
const p2: IPerson2 = {
  name: 'wangxin',
  age: 23,
}
