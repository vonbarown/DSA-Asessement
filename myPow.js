/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let a = x;

  if (x === 1) return 1;
  if (x === 0) return 0;

  if (n <= 0) {
    x = 1 / x;
    a = x;
    n = Math.abs(n);

    if (n > 700 && x > 0) {
      return 0;
    }
  }

  while (n !== 0) {
    a = a * x;

    n--;
  }

  return (a / x).toFixed(5);
};
