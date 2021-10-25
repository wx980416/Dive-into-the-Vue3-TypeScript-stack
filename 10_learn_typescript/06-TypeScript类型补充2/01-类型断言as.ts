// el 类型是html dom 元素 不是常规的js数据类型
// el 是一个广泛的类型
// const el = document.getElementById('wangxin')

// 无法获取具体的类型信息，这个我们需要使用类型断言
// 类型断言 as
const el = document.getElementById('wangxin') as HTMLImageElement

// 不推荐
// const message = 'Hello World'
// const num: number = message as unknown as number

export {}
