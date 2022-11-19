// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let sortedArr = arr.sort((a, b) => a - b)

  let minArr = [...sortedArr]
  minArr.pop()

  let maxArr = [...sortedArr]
  maxArr.shift()

  console.log(
    [minArr, maxArr].map(arr => arr.reduce((a, b) => a + b)).join(' ')
  )
}

// Another Solution
function miniMaxSum(arr) {
  let sum = arr.reduce((acc, num) => acc + num)

  let min = sum - Math.max(...arr)

  let max = sum - Math.min(...arr)

  console.log(`${min} ${max}`)
}
