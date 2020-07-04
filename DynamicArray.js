class DynamicArray {
  constructor(len){
    this.storage = []
    this.storage.length = len
    this.index = 0
  }

  push(val){
    this.storage[this.index] = val

    this.index += 1

    if(this.index === this.storage.length){
      this.storage.length = 2 * this.storage.length
    }
    return this.storage
  }

  pop(){
    //cutting the length of storage to only have the elements
    this.storage.length = this.index

    let deleted = this.storage.pop()

    this.storage.length = this.storage.length  * 2   
    this.index -= 1

  console.log(this.storage)

    return deleted 
  }

  deleteElem(indx){
    let temp = []
    let store = this.storage
    console.log('hi')
    
    for(let i = 0; i < this.storage.length; i++){
      if(indx !== i){
        temp.push(store[i])
      }
    }

    return temp
  }

  getElem(index){
    return this.storage[index]
  }
}

let arr = new DynamicArray(5)

arr.push(10)
arr.push(9)
arr.push(8)
arr.push(7)
arr.push(6)

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()

console.log(arr.deleteElem(0))
