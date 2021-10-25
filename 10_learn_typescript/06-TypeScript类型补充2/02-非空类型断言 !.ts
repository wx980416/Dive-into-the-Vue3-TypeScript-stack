function printMessage(message?: string) {
  // message有可能是为undefined的
  // console.log(message.length) // message对象可能未定义
  // 使用类型缩小
  // if (message) {
  //   console.log(message.length)
  // }

  // 非空断言 !
  console.log(message!.length)
}

printMessage('hhhh')
printMessage('哈哈哈哈哈哈')
printMessage()
export {}
