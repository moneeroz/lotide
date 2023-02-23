const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
}

assertObjectsEqual({ age: 29, sex: 'x' }, { sex: 'x', age: 19 })
assertObjectsEqual({ age: 29, sex: 'x', loc: 'mixco' }, { sex: 'x', age: 19 })

module.exports = assertObjectsEqual
