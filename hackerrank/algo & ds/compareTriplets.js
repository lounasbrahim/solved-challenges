// source : https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let ascore = 0,
    bscore = 0
  a.forEach((item, i) => {
    a[i] > b[i] && ascore++
    a[i] < b[i] && bscore++
  })
  return [ascore, bscore]
}
