

let matrix2 = [
  [1, 2, 9],
  [8, 2, 3],
  [4, 5, 6],
]


const matrixMax = (matrix) => {

  // sums of rows
  let rowSum = matrix.map(r => r.reduce((a, b) => a + b));

  // sums of columns
  let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

  let combArr = [...rowSum, ...colSum]

  return combArr.reduce((acc, currel) => {
    if (acc > currel) {
      return acc
    } else {
      return currel
    }
  })

}



console.log('matrixMax', matrixMax(matrix2))
