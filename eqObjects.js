
const eqArrays = require('./eqArrays')
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
}

const eqObjects = (obj1, obj2) => {
  const arr1 = Object.keys(obj1).sort()
  const arr2 = Object.keys(obj2).sort()

  if (!eqArrays(arr1, arr2)) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!eqArrays(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
}

// const shirtObject = { color: 'red', size: 'medium' }
// const anotherShirtObject = { size: 'medium', color: 'red' }
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true) // => true

// const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' }
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false) // => false
const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' }
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] }
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true) // => true

const longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false) // => false

module.exports = eqObjects
