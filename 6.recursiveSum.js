// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


const recursiveSum = (arr, i = 0) => {
    let sum = 0;
    console.log(sum + arr[i]);
    if (i === arr.length) {
        return arr[i]
    }

    return recursiveSum(arr, i + 1)
}

const arr1 = [5, 2, 9, 11]
console.log(recursiveSum(arr1));
 // should return 27
