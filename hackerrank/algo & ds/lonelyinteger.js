// source: https://www.hackerrank.com/challenges/lonely-integer/problem
function lonelyinteger(a) {
  let uniqValue = Object.entries(
    a.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1
      return acc
    }, {})
  )
    .filter(el => el[1] == 1)
    .map(el => el[0])[0]

  return parseInt(uniqValue)
}
