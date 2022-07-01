function idValidation (id) {
  // first three character should be equal to last 2 characters
  const firstThreeCharacters = id.slice(0, 3).split("").map(Number);
  const lastTwoCharacters = parseInt(id.slice(3, 5));
  const sumFristThree = firstThreeCharacters.reduce((acc, curr) => acc + curr);
  if (sumFristThree !== lastTwoCharacters) {
    return false;
  }
  // id length should be 5
  if (id.length !== 5) {
    return false;
  }
  // id should be numbers
  if (!/^[0-9]+$/.test(id)) {
    return false;
  }
  return true;
}

export default idValidation;