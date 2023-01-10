// Function implmentaion
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
}

const tail = function (Arr) {
  return Arr.slice(1)
}

// Test Case
const words = ['yo', 'school', 'time']
tail(words)
assertEqual(words.length, 3)
