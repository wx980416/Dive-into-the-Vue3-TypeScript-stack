function foo(): never {
  // 死循环，不会有返回值时
  while (true) {}
}

function bar(): never {
  // 抛出异常时
  throw new Error()
}

// 补充知识 联合类型
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string', message)
      break
    case 'number':
      console.log('number', message)
      break
    case 'boolean':
      console.log('新加的 boolean', message)
      break
    default:
      const check: never = message // 提醒
  }
}
handleMessage('111')
// handleMessage(true) // // 会缺失对其他类型的判断
