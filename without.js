const eqArrays = (Arr1, Arr2) => {
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1.length !== Arr2.length || Arr1[i] !== Arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = (Arr1, Arr2) => {
  if (eqArrays(Arr1, Arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${Arr1} === ${Arr2}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${Arr1} !== ${Arr2}`)
}

const without = (sourceArr, itemsToRemove) => {
  let newArr = sourceArr
  newArr = newArr.filter(item => !itemsToRemove.includes(item))
  return newArr
}

const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse']) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])
