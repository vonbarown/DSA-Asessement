let sortedArray = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7];

const removeDuplicates = arr => {
  if (!arr) return 0;

  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] != arr[slow]) {
      arr[++slow] = arr[fast];
    }
  }
  return slow;
};

// console.log(removeDuplicates(sortedArray));

let nums = [1, 2, 3, 4, 5, 6, 7];

const twoSumBrute = (nums, numTarget) => {
  const arraySize = nums.length;

  for (let i = 0; i < arraySize; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      if (numTarget - nums[i] === nums[j]) return [i, j];
    }
  }
  return `target not found in data`;
};

const twoSumEff = (nums, target) => {
  const numObj = {};

  for (let num in nums) {
    let key = nums[num];
    let diff = target - nums[num];

    if (diff in numObj) {
      return [Number(numObj[diff]), Number(num)];
    }
    numObj[key] = num;
  }
  return `target not found in data`;
};

// console.log(twoSumEff(nums, 12));

const hourglassSum = arr => {
  let hourglasses = [];

  if (
    typeof arr === "object" &&
    arr.length === 6 &&
    arr.map(i => i.length).reduce((p, n) => p + n) === 36
  ) {
    for (let row = 0; row <= 3; row++) {
      let sum = 0;

      sum += arr[row][row];
      sum += arr[row][row + 1];
      sum += arr[row][row + 2];
      sum += arr[row + 1][row + 1];
      sum += arr[row + 2][row];
      sum += arr[row + 2][row + 1];
      sum += arr[row + 2][row + 2];

      hourglasses.push(sum);
    }
  }

  return hourglasses.length > 0 ? Math.max(...hourglasses) : 0;
};

let sample = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
console.log(hourglassSum(sample));

const diagonalDifference = arr => {
  if (!arr.length) return 0;

  let diagonal1 = 0,
    diagonal2 = 0;

  for (let row = 0; row < arr.length; row++) {
    diagonal1 += arr[row][row];
    // console.log(diagonal1)
    diagonal2 += arr[row][arr.length - row - 1];
  }

  return Math.abs(diagonal1 - diagonal2);
};

console.log("dig", diagonalDifference(sample));

//using a set to remove duplicates
let arr1 = [2, 2, 1, 3, 4];
let arr2 = [2, 4, , 3, 6];

const duplicates = (arr1, arr2) => {
  if (!arr1 || !arr2) return [];

  let dups = new Set(arr1);

  let output = [];
  arr2.forEach(el => {
    if (dups.has(el)) {
      output.push(el);
    } else {
      dups.add(el);
    }
  });
  return output;
};

console.log(duplicates(arr1, arr2));

//making an anagram
const makeAnagram = (a, b) => {
  if (!a || !b) return 0;
  if (a.length === 0 && a.length === 0) return 0;
  if (a === b) return 0;

  let strObj1 = {};
  let strObj2 = {};
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < a.length; i++) {
    strObj1[a[i]] = strObj1[a[i]] ? strObj1[a[i]] + 1 : 1;
  }
  for (let i = 0; i < b.length; i++) {
    strObj2[b[i]] = strObj2[b[i]] ? strObj2[b[i]] + 1 : 1;
  }
  for (let i = 0; i < a.length; i++) {
    if (strObj2.hasOwnProperty(a[i])) {
      strObj2[a[i]]--;
      if (strObj2[a[i]] === 0) {
        delete strObj2[a[i]];
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (strObj1.hasOwnProperty(b[i])) {
      strObj1[b[i]]--;
      if (strObj1[b[i]] === 0) {
        delete strObj1[b[i]];
      }
    }
  }

  for (let key in strObj1) {
    sum1 += strObj1[key];
  }
  for (let key in strObj2) {
    sum2 += strObj2[key];
  }
  return sum1 + sum2;
};
//making an anagram
const makeAnagram = (a, b) => {
  if (!a || !b) return 0;
  if (a === b) return 0;

  let strObj = {};
  let i;

  for (i = 0; i < a.length; i++) {
    strObj[a[i]] = (strObj[a[i]] || 0) + 1;
  }
  for (i = 0; i < b.length; i++) {
    strObj[b[i]] = (strObj[b[i]] || 0) - 1;
  }
  let total = 0;
  for (let key in strObj) {
    if (strObj[key] {
      total += Math.abs(strObj[key]);
    }
  }

  console.log(strObj);
  return total;
};

//sherlock valid string
if (!s.length) return 0;

let output = [];
let strObj = {};
let count = 0;

for (let i = 0; i < s.length; i++) {
  if (strObj[s[i]]) {
    strObj[s[i]] += 1;
  } else {
    strObj[s[i]] = 1;
  }
}

let values = Object.values(strObj);
let diff = Math.max(...values) - Math.min(...values);

for (let j = 1; j < values.length; j++) {
  if (values[0] !== values[j]) {
    count++;
  }
}

console.log("obj", strObj);
console.log("arr", values);
console.log("count", count);
console.log("diff", diff);

if (count <= 1 && (values[values.length - 1] === 1 || diff <= 1)) {
  return "YES";
} else {
  return "NO";
}
