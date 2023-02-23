const assertArraysEqual = require('./assertArraysEqual')

const without = (sourceArr, itemsToRemove) => {
  let newArr = sourceArr
  newArr = newArr.filter(item => !itemsToRemove.includes(item))
  return newArr
}

const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse']) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])

module.exports = without
