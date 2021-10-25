type IDtype = number | string

function printId(id: IDtype) {
  if (typeof id === 'number') {
    console.log('您的数字id是：', id)
  } else {
    console.log('您的id是：', id)
  }
}

printId(1111)
printId('1111')
export {}
