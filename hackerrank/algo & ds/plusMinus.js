// source : https://www.hackerrank.com/challenges/plus-minus/problem

let positives = arr.filter(number => number > 0).length / arr.length;
let negatives = arr.filter(number => number < 0).length / arr.length;;
let zeros = arr.filter(number => number === 0).length / arr.length;;
return console.log(`${positives.toFixed(4)} \n ${negatives.toFixed(4)} \n ${zeros.toFixed(4)}`)