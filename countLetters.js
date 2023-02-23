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

module.exports = countLetters
