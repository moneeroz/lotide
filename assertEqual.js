// Function implmentaion
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
}

module.exports = assertEqual
// Test code
// assertEqual('UofC', 'Bootcamp')
// assertEqual('Moneer', 'Moneer')
// assertEqual(1, 1)
// assertEqual(1, -1)
