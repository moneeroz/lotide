const letterPositions = (str) => {
  const results = {}
  // code goes here
  for (let i = 0; i < str.length; i++) {
    if (i === ' ') {
      continue
    }
    results[str[i]] ? results[str[i]].push(i) : results[str[i]] = [i]
  }
  console.log(results)
}

module.exports = letterPositions
