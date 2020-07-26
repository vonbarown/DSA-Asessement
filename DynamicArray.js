class DynamicArray {
  constructor(startLen = 2) {
    this.staticArr = new Array(startLen);
    // this.staticArr.length = startLen
    this.length = 0;
  }

  push(val) {
    if (this.length === this.staticArr.length) {
      let newStaticArr = new Array(this.length * 2);

      for (let x = 0; x < this.staticArr.length; x++) {
        newStaticArr[x] = this.staticArr[x];
      }

      this.staticArr = newStaticArr;
    }

    this.staticArr[this.length] = val;

    this.length += 1;
  }

  pop() {
    //cutting the length of staticArr to only have the elements
    let deleted = this.staticArr[this.length - 1];

    this.staticArr[this.length - 1] = undefined;

    this.length -= 1;

    return deleted;
  }

  deleteElem(indx) {
    let temp = [];
    let store = this.staticArr; 
    let deleted = store[indx]

    for (let i = 0; i < store.length; i++) {
      if (indx !== i) {
        temp[i] = store[i];
      }
    }
    
    this.staticArr = temp

    return deleted;
  }

  getElem(index) {
    return this.staticArr[index];
  }
}

let arr = new DynamicArray(5);

arr.push(10);
arr.push(9);
arr.push(8);
arr.push(7);
arr.push(6);
arr.push(5);
arr.push(4);
arr.push(3);

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()

console.log(arr.deleteElem(0));
