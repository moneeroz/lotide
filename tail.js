const assertEqual = require('./assertEqual')

// Function implmentaion
const tail = function (Arr) {
  return Arr.slice(1)
}

// Test Case
const words = ['yo', 'school', 'time']
tail(words)
assertEqual(words.length, 3)

module.exports = tail
