const transpose = function (matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map((ls) => ls.join(""));
  for (i of verticalJoin) {
    if (i.includes(word)) return true;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
