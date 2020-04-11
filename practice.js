let sortedArray = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7];

const removeDuplicates = (arr) => {
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

const hourglassSum = (arr) => {
  let hourglasses = [];

  if (
    typeof arr === "object" &&
    arr.length === 6 &&
    arr.map((i) => i.length).reduce((p, n) => p + n) === 36
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
  [0, 0, 1, 2, 4, 0],
];
console.log(hourglassSum(sample));

const diagonalDifference = (arr) => {
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
  arr2.forEach((el) => {
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
    if (strObj[key]) {
      total += Math.abs(strObj[key]);
    }
  }

  console.log(strObj);
  return total;
};

//sherlock valid string
const SherlockValidStr = (s) => {
  if (!s.length) return 0;

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
};

//toeplitz check
let a = [
  [1, 2, 3, 4],
  [5, 3, 2, 3],
  [6, 5, 1, 2],
];

let c = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 5, 1, 2],
];

let b = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 5, 1, 2],
  [6, 5, 5, 1],
  [6, 5, 1, 5],
];

let d = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 2, 1, 2],
  [6, 5, 5, 1],
  [6, 5, 1, 5],
];
//matrix[a][matrix[a].length - 1]
const toeplitzChecker = (matrix) => {
  let height = matrix.length;
  let width = matrix[0].length;

  let small = width >= height ? height : width;
  let big = width <= height ? height : width;
  big = big - small + 1;

  let direction = width > height;

  for (let i = 0; i < big; i++) {
    let diagnol = {};
    for (let j = 0; j < small; j++) {
      if (direction) {
        diagnol[matrix[j][i + j]] = true;
      } else {
        diagnol[matrix[i + j][j]] = true;
      }
    }
    if (Object.keys(diagnol).length > 1) return false;
  }

  return true;
};

console.log(toeplitzChecker(a));
console.log(toeplitzChecker(b));
console.log(toeplitzChecker(c));
console.log(toeplitzChecker(d));

//tictac toe
let input = [
  ["X", "O", "O"],
  ["X", "X", " "],
  ["O", "O", "X"],
];
const checkTicTacToe = (matrix) => {
  if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
    if (" " !== matrix[1][1]) return matrix[1][1];
  }
  if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
    if (" " !== matrix[1][1]) return matrix[1][1];
  }
  for (let i = 0; i < 3; i++) {
    if (matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
      if (" " !== matrix[i][1]) return matrix[i][1];
    }
    if (matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
      if (" " !== matrix[1][i]) return matrix[1][i];
    }
  }
  return;
  // console.log(obj)
};

//max profit
const maxProfit = (prices) => {
  let maxprofit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) maxprofit += prices[i] - prices[i - 1];

    console.log(maxprofit);
  }
  return maxprofit;
};

console.log("max profit");

maxProfit([7, 4, 5, 9, 2, 6, 1]);

const findPermutations = (string) => {
  //check if the user enters a valid string
  // checks if the input is empty or type is not a string
  //output error message
  if (!string || typeof string !== "string") {
    return "Error, invalid input";
  }

  //check if the string is too short to perform op
  //returns itself
  if (string.length < 2) {
    return string;
  }

  //init an array to hold all the different permutations
  let stack = [];

  //looping through the string to check each character
  for (let i = 0; i < string.length; i++) {
    //variable to hold current character
    let char = string[i];

    //preventing repeating of permutations when duplicate letters
    if (string.indexOf(char) !== i) continue;

    //holding the remaining characters by slice off the rest of the string from char
    let remainingChar = string.slice(0, i) + string.slice(i + 1, string.length);

    //calling the function recursively of the remaining characters
    for (let permutation of findPermutations(remainingChar))
      stack.push(char + permutation);
  }

  return stack;
};
console.log("permutation");
//permutation
console.log(findPermutations("voniel"));

//valid parenthesis
const isValid = (s) => {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    // If character is an opening brace add it to a stack
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }

  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
//converting 12 hour time into 24 hour format
const timeConversion = (s) => {
  let PM = s.match("PM") ? true : false;
  let hour;
  let second;
  s = s.split(":");
  let min = s[1];

  if (PM) {
    hour = 12 + parseInt(s[0], 10);
    second = s[2].replace("PM", "");
  } else {
    hour = s[0];
    second = s[2].replace("AM", "");
  }

  return hour + ":" + min + ":" + second;
};

const findMedianSortedArrays = (nums1, nums2) => {
  let arr = nums1.concat(nums2);

  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const strStr = (haystack, needle) => {
  if (haystack.length < 1 && needle.length < 1) {
    return 0;
  }
  if (haystack.length < 1) {
    return -1;
  }

  if (needle.length < 1) {
    return 0;
  }

  let nIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[nIndex]) {
      if (nIndex === needle.length - 1) {
        return i - nIndex;
      } else {
        nIndex++;
      }
    } else if (nIndex > 0) {
      i = i - nIndex;
      nIndex = 0;
    }
  }

  return -1;
};

//has change function
const hathChange = (arr) => {
  if (!arr) return true;

  //initialize empty register as an object with key of denomination
  //values as the amount in register
  let register = {
    5: 0,
    10: 0,
    20: 0,
  };

  //looping through input array to check each individual elemen
  for (let i = 0; i < arr.length; i++) {
    //switch statement to increment or decrement the values base don what is
    //in the register
    switch (arr[i]) {
      case 5:
        register[5] += 1;
        break;
      case 10:
        register[5] -= 1;
        register[10] += 1;
        break;
      case 20:
        register[20] += 1;
        if (register[5] >= 1 && register[10] >= 1) {
          register[5] -= 1;
          register[10] -= 1;
        } else if (register[5] >= 3) {
          register[5] -= 3;
        }
    }
  }

  console.log(register);
  //looping through the register object to check is there is any negatives
  //if there is a negative value then register doesn't have change
  for (let key in register) {
    if (register[key] < 0) {
      return false;
    } else {
      return true;
    }
  }
};

hathChange([5, 5, 5, 10, 20, 5, 10]);

//merging two sorted linked list
const mergeTwoSortedLists = (l1, l2) => {
  // creating a new head pointer for the merged linked list
  let mergedLLHead = { val: -1, next: null };
  let pointer = mergedLLHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      pointer.next = l2;
      l2 = l2.next;
    } else {
      pointer.next = l1;
      l1 = l1.next;
    }
    pointer = pointer.next;
  }

  // l1 = 1->2->3, l2 = 10->20->30
  // In that case l1, will point to null and while loop will break
  // Simply point pointer to l2. We do not have to add individual nodes
  pointer.next = l1 || l2;

  return mergedLLHead.next;
};

const lengthOfLongestSubstring = (s) => {
  let longestStrLength = 0;
  let currentStr = "";
  for (i in s) {
    let char = s[i];
    let charPos = currentStr.indexOf(char);
    if (charPos === -1) {
      currentStr += char;
      console.log(currentStr);
    } else {
      longestStrLength = Math.max(longestStrLength, currentStr.length);
      currentStr = currentStr.substring(charPos + 1) + char;
    }
  }
  longestStrLength = Math.max(longestStrLength, currentStr.length);
  return longestStrLength;
};

const gameOfLife = (board) => {
  if (!board || !board[0]) {
    return board;
  }
  helper(board, 0, 0);
  return board;
};

const helper = (board, r, c) => {
  if (!board[r]) return;
  if (typeof board[r][c] === "undefined") return helper(board, r + 1, 0);

  // `totalLiving` value for amount of total living neighbors
  let totalLiving = 0;
  for (let rr = r - 1; rr <= r + 1; rr++) {
    if (typeof board[rr] === "undefined") continue;

    for (let cc = c - 1; cc <= c + 1; cc++) {
      if (board[rr][cc] === "undefined" || (rr == r && cc == c)) continue;

      if (board[rr][cc] === 1) {
        totalLiving += 1;
      }
    }
  }

  // run this function on next cell before using my `totalLiving` variable
  helper(board, r, c + 1);

  // after runnin this on the next cell, NOW set my value
  if (totalLiving < 2 || totalLiving > 3) {
    board[r][c] = 0;
  } else if (totalLiving === 3) {
    board[r][c] = 1;
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

//adding two numbers together that are linked list
const addTwoNumbers = function (l1, l2) {
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};

//finding median of two sorted arrays
const findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);

  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
