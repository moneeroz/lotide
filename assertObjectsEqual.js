
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
}

assertObjectsEqual({ age: 29, sex: 'x' }, { sex: 'x', age: 19 })
assertObjectsEqual({ age: 29, sex: 'x', loc: 'mixco' }, { sex: 'x', age: 19 })
