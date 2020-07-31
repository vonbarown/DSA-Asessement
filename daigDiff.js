
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
