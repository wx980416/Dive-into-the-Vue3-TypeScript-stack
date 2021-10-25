interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: 'wangxin',
  age: 23,
}

const info2: IInfoType = {
  name: 'wangxin2',
  age: 23,
  friend: {
    name: 'liwenhao',
  },
}

// info.name = 'wwww'
