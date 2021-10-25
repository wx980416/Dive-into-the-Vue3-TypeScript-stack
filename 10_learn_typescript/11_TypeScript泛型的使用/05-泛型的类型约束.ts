interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength('abc')

// getLength(1)
getLength({ length: 100 })
getLength(['abc', '123'])
