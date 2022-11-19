// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  let sortedArr = arr.sort((a, b) => a - b)

  let minArr = [...sortedArr]
  minArr.pop()

  let maxArr = [...sortedArr]
  maxArr.shift()

  console.log(
    [minArr, maxArr].map(arr => arr.reduce((a, b) => a + b)).join(' ')
  )
}
