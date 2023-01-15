const middle = arr => {
  let newArr = []
  const lessThanTwoArr = []
  if (arr.length <= 2) {
    console.log(lessThanTwoArr)
  } else if (arr.length % 2 === 0) {
    newArr = [arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor((arr.length) / 2)]]
    console.log(newArr)
  } else {
    newArr = [arr[Math.floor((arr.length) / 2)]]
    console.log(newArr)
  }
}
