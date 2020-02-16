// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution must work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]

const occurrenceFilter = (arr, n) => {
    let dupes = {}
    let filtered = []
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        if (!dupes[key]) {
            dupes[key] = counter
        }
        dupes[key] += 1

    }

    for (let val in dupes) {
        if (dupes[val] >= n) {
            filtered.push(Number(val))
        }

    }
    return filtered
}
console.log(occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3));
 // Returns [1, 3]
