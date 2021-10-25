// 此时无法确定name中存放的是什么类型的数据
// const names = []
// names.push(1)
// names.push({})
// names.push(true)

const names: Array<string> = [] // 会和（react jsx 有冲突）

// 只写这种规范
const names2: string[] = [] // 推荐
const names3: string[] = []
// names.push(1)
// names.push({})
// names.push(true)
names.push('123')

console.log(names)

export {}
