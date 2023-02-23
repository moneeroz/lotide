// Test
const assertEqual = require('./assertEqual')

// Function implmentaion
const findKey = (object, callback) => {
  const newKeys = Object.keys(object).sort()
  let firstKey = ''
  for (const key of newKeys) {
    if (!callback(key)) firstKey = key
  }

  return firstKey
}

assertEqual(findKey({
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
}, x => x.stars === 2), 'noma') // => "noma"

module.exports = findKey
