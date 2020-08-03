let matrix = [
  [1, 2, 9, 5],
  [8, 2, 3, 7],
  [4, 5, 6, 2],
  [4, 5, 6, 2]
]

const diagSum = (matrix) => {

  if (!matrix.length) return 0

  let diag1 = 0
  let diag2 = 0

  for (let i = 0; i < 3; i++) {
    diag1 += matrix[i][i]
    diag2 += matrix[i][matrix.length - i - 1] 
  }

  console.log(diag1,diag2)

  return diag1 + diag2
}


console.log('diag sum',diagSum(matrix))
