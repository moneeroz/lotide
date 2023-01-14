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

assertArraysEqual([1, 3, 5], [1, 3, 5])
assertArraysEqual([1, -7, 'a'], [1, -7, 'a'])
assertArraysEqual([1, 2, 3, 4], [1, 2, 3])
