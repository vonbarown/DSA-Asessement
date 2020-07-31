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

//merging two sorted linked list
let mergeTwoLists = (l1, l2) => {
  let result = new ListNode(0);
  let current = result;
  while (l1 || l2) {
    let min;
    if (!l2 || (l1 && l1.val <= l2.val)) {
      min = l1.val;
      l1 = l1.next;
    } else if (!l1 || (l2 && l2.val <= l1.val)) {
      min = l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(min);
    current = current.next;
  }
  return result.next;
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let queue = [];

  //calling the function to add to queue recursively
  inorder(root, queue);

  console.log(queue);

  let newRoot = new TreeNode(queue[0]);

  let pointer = newRoot;
  queue.shift();

  while (queue.length) {
    pointer.right = new TreeNode(queue.shift());
    pointer = pointer.right;
  }

  return newRoot;
};

const inorder = (node, arr) => {
  if (!node) return;

  inorder(node.left, arr);
  arr.push(node.val);
  inorder(node.right, arr);
};

// array permutation
var permute = function (nums) {
  return dfs([], nums, new Set(), []);
};

const dfs = (stack, nums, seen, res) => {
  if (stack.length === nums.length) {
    console.log("sliced", stack.slice());

    res.push(stack.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) continue;
    console.log("seen", seen);

    stack.push(nums[i]);
    console.log("stacked", stack);
    seen.add(nums[i]);

    dfs(stack, nums, seen, res);
    console.log("post recursive", stack);

    stack.pop();

    seen.delete(nums[i]);
    console.log("seened", seen);
  }
  return res;
};

//3sum
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let indexA = i + 1;
    let indexB = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (indexA < indexB) {
      let sum = nums[i] + nums[indexA] + nums[indexB];

      if (sum < 0) {
        indexA++;
      } else if (sum > 0) {
        indexB--;
      } else {
        res.push([nums[i], nums[indexA], nums[indexB]]);
        while (nums[indexA] === nums[indexA + 1]) indexA++;
        while (nums[indexB] === nums[indexB + 1]) indexB--;
        indexA++;
        indexB--;
      }
    }
  }

  console.log(nums);
  return res;
};
