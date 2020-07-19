/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  let res = [];
  let result = [];
  let resIndx = 0;

  for (let i = 0; i < nums.length; i++) {
    let k = nums[i];

    obj[k] = (obj[k] || 0) + 1;
  }

  for (let l in obj) {
    res[resIndx] = [Number(l), obj[l]];

    resIndx++;
  }

  res = res.sort((a, b) => a[0] - b[0]);
  res = res.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < res.length; i++) {
    console.log(res[i][0]);

    if (k > 0) {
      result[i] = res[i][0];
    }
    k--;
  }

  return result;
};
