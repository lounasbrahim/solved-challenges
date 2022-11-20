// source: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference() {
  let leftDiagonal = arr.map((arr, index) => arr[index])
  let rightDiagonal = arr.map((arr, index) => arr[arr.length - 1 - index])
  let diags = [leftDiagonal, rightDiagonal]

  let diagsSums = diags.reduce((acc, num) => {
    acc = [...acc, num.reduce((a, b) => a + b)]
    return acc
  }, [])

  let diff = Math.abs(diagsSums[0] - diagsSums[1])
}
