// source : https://www.hackerrank.com/challenges/countingsort1/problem

function countingSort(arr) {
  let filledArr = new Array(100).fill(0)
  arr.map(el => filledArr[el]++)
  return filledArr
}
