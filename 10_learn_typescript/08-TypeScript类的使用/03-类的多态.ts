class Animal {
  action() {
    console.log('animal action')
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running')
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming')
  }
}

function makeActions(animal: Animal[]) {
  animal.forEach((animal) => {
    animal.action()
  })
}
makeActions([new Dog(), new Fish()])
