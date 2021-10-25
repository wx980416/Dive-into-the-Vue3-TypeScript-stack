// 1.typeof
type IDType = number | string
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// 2.=== == !== != switch
type Direction = 'left' | 'right'
function printDirection(direction: Direction) {
  // if
  if (direction === 'left') {
    console.log(direction)
  } else {
    console.log('不是left')
  }

  // switch
  switch (direction) {
    case 'left':
      console.log(direction)
      break
    default: {
      console.log('不是left')
    }
  }
}

// 3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

class Student {
  studying() {}
}
class Teacther {
  teaching() {}
}

function work(p: Student | Teacther) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

const stu = new Student()
work(stu)

// 4.in
type Fish = {
  swimming: () => void
}
type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log('swimming')
  },
}

walk(fish)
