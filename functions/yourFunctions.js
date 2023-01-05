function addNames(inputArray) {
  const returnArray = []
  for (let i = 0; i < inputArray.length; i++) {
    returnArray.push(inputArray[i].name)
  }
  return returnArray
}

function multiply(value1, value2) {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') return 0
  return value1 * value2
}

module.exports = {
  addNames,
  multiply,
};
