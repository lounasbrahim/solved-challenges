// https://www.hackerrank.com/challenges/find-the-median/problem

function findMediane(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  const medianeIndex = (arr.length - 1) / 2
  return sortedArr[medianeIndex]
}
