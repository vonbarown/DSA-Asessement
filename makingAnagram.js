//making an anagram
const makeAnagram = (a, b) => {
  if (!a || !b) return 0;
  if (a === b) return 0;

  let strObj = {};

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
