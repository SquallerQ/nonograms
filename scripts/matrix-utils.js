export function rotateMatrix(matrix) {
  const rotatedMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    rotatedMatrix.push(newRow);
  }
  return rotatedMatrix;
}

export function createEmptyMatrix(matrix) {
  const emptyMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      matrixRow.push(0);
    }
    emptyMatrix.push(matrixRow);
  }
  return emptyMatrix;
}

export function compareMatrices(templateMatrix, playerMatrix) {
  function discardCrosses(mat) {
    let newMatrix = [];
    for (let i = 0; i < mat.length; i++) {
      let newRow = [];
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] === -1) {
          newRow.push(0);
        } else {
          newRow.push(mat[i][j]);
        }
      }
      newMatrix.push(newRow);
    }
    return newMatrix;
  }

  const discardedTemplate = discardCrosses(templateMatrix);
  const discardedPlayerMatrix = discardCrosses(playerMatrix);

  const templateString = discardedTemplate.join(',');
  const playerString = discardedPlayerMatrix.join(',');

  return templateString === playerString;
}
