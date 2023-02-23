const eqArrays = require('./eqArrays')

const assertArraysEqual = (Arr1, Arr2) => {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${Arr1} === ${Arr2}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${Arr1} !== ${Arr2}`)
}

module.exports = eqArrays
