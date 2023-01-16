const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
}

const countLetters = (str) => {
  const counter = {}

  for (const letter of str) {
    if (letter === ' ') {
      continue
    }
    (counter[letter]) ? counter[letter]++ : counter[letter] = 1
  }

  return counter
}
