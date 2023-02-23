// Testing
const eqArrays = require('./eqArrays')

// Function Implmintation
const assertArraysEqual = (Arr1, Arr2) => {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${Arr1} === ${Arr2}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${Arr1} !== ${Arr2}`)
}

const words = ['ground', 'control', 'to', 'major', 'tom']

const map = (array, callback) => {
  const results = []
  for (const item of array) {
    results.push(callback(item))
  }
  return results
}

const results1 = map(words, word => word[0])
console.log(results1)

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']) // pass
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm']) // fail
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']) // pass

module.exports = map
