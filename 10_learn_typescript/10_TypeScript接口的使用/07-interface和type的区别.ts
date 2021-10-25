// interface 可以重复的对某个接口来定义属性和方法；
// 而type定义的是别名，别名是不能重复的；
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  age: 23,
  name: 'wangxin',
}

type IBar = {
  name: string
}

// type IBar = {
//   age: number
// }

// 合并内置属性
// document.getElementById('app') as HTMLLIElement
// window.addEventListener
interface Window {
  age: number
}

window.age = 23

// 不会覆盖全局的window.age
console.log(window.age)
