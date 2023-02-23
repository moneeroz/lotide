// Function implmentaion
const assertEqual = require('./assertEqual')

const head = function (Arr) {
  const a = Arr[0]
  return a
}

// Test code
assertEqual(head([5, 6, 7]), 5)
assertEqual(head([5]), 5)
assertEqual(head([]), 5)
assertEqual(head(['Hello', 'There', 'general Kenobi']), 'Hello')

module.exports = head
