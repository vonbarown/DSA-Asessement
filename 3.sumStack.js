class Stack {
  constructor() {
    this.arr = []
  }

  isEmpty() {
    return this.arr.length === 0
  }

  push(value) {
    this.arr.push(value)
  }

  pop() {
    return this.arr.pop()
  }

  peek() {
    return this.arr[this.arr.length - 1]
  }
}

// Fill stack
let s = new Stack()
s.push(10)
s.push(12)
s.push(267)
s.push(88)
s.push(91)
s.push(14)

// Implement your function here
const sum = (stack) => {

}

sum(s) // should return 482
