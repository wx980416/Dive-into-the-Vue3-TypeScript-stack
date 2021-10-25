// 在前面一些私有属性我们是不能直接访问的，
// 或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，
// 这个时候我们可以使用存取器。
class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器
  set name(newValue) {
    this._name = newValue
  }

  get name() {
    return this._name
  }
}

const p = new Person('wangxin')
p.name = 'wangxin223355'
console.log(p.name)
