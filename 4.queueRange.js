// Q4.
// Write a function `range` that takes in a Queue of numbers, returns the range (difference between the minimum and maximum).

class Queue {
  constructor() {
    this.array = []
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.array[0]
    }
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }
}

// Fill up the queue
let q = new Queue()
q.enqueue(-145)
q.enqueue(45)
q.enqueue(11)
q.enqueue(98)
// q.enqueue(100)

// Write your function here
const range = (queue) => {
  // console.log('queue', queue);

  if (queue.isEmpty()) {
    return
  }

  let arr = queue.array
  let max = arr[0]
  let min = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
    if (min > arr[i]) {
      min = arr[i]
    }
  }

  console.log(max - min);

}

// Example
range(q) // should return 243
