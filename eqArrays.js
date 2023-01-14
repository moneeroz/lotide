// Function implmentaion
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
}

const eqArrays = (Arr1, Arr2) => {
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1.length !== Arr2.length || Arr1[i] !== Arr2[i]) {
      return false
    }
  }
  return true
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
