// 类型的参数化

// 在定义我们函数时，我不决定这些参数的类型
// 调用者告诉我这里的参数是什么类型

function sum<Type>(num1: Type) {
  return num1
}

// 接收类型的参数
// <number> 传进去
sum<number>(20)

sum<{ name: string }>({ name: 'wangxin' })
sum<any[]>(['array'])

sum(50)
