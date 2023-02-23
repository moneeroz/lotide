const assertEqual = require('./assertEqual')

const findKeyByValue = (obj, value) => {
  let result = ''
  for (const key in obj) {
    obj[key] === value ? result = key : result = undefined
  }
  return result
}

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
}

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)

module.exports = findKeyByValue
