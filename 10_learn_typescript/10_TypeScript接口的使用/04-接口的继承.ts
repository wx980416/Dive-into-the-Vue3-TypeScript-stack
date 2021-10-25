interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

// 接口继承
interface IActive extends ISwim, IFly {}

const action: IActive = {
  swimming() {},
  flying() {},
}
