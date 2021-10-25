// 联合类型
type WhyType = number | string
type Diection = 'left' | 'right' | 'center'

//  交叉类型
type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
// 交叉接口
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() {},
}

const obj2: MyType2 = {
  flying() {},
  swimming() {},
}

export {}
