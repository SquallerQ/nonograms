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

export function clearMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
    }
  }
}

export function updateMatrixOnDisplay(matrix, withCross = false) {
  const matrixContainer = document.querySelector('.matrix__container');
  const cells = matrixContainer.querySelectorAll('.cell');

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellIndex = rowIndex * matrix[0].length + colIndex;
      if (cells[cellIndex]) {
        if (cell === 1 && withCross === false) {
          cells[cellIndex].classList.remove('cell-cross');
          cells[cellIndex].classList.add('cell-active');
        } 
        else if (cell === 1 && withCross === true) {
          cells[cellIndex].classList.add('cell-active');
        }
        else if (cell === -1 && withCross === true) {
          cells[cellIndex].classList.add('cell-cross');
        } else {
          cells[cellIndex].classList.remove('cell-active', 'cell-cross');
        }
      }
    });
  });
}

export function displayCountCellsLeft(matrixTemplate, gameContainer) {
  let leftPanelContainer = document.querySelector('.count-cells__left-container');
  if (leftPanelContainer) {
    leftPanelContainer.remove();
  }
  leftPanelContainer = document.createElement('div');
  leftPanelContainer.classList.add('count-cells__left-container');
  gameContainer.append(leftPanelContainer);

  for (let i = 0; i < matrixTemplate.length; i++) {
    const leftPanelRow = document.createElement('div');
    leftPanelRow.classList.add('count-cells__left-row');
    leftPanelContainer.append(leftPanelRow);
    leftPanelRow.dataset.rowId = i;

    if (i % 5 === 0 && i !== 0) {
      leftPanelRow.classList.add('bold-line');
    }

    const matrixRow = matrixTemplate[i];
    let numberOfBlackCells = 0;
    let hasBlackCells = false;

    for (let j = 0; j < matrixRow.length; j++) {
      if (matrixRow[j] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
        hasBlackCells = true;
      }
      if ((matrixRow[j] === 0 || j === matrixRow.length - 1) && numberOfBlackCells > 0) {
        const leftPanelCell = document.createElement('div');
        leftPanelCell.classList.add('count__cell');
        leftPanelCell.innerText = numberOfBlackCells;
        leftPanelRow.append(leftPanelCell);

        numberOfBlackCells = 0;
      }
    }
    if (!hasBlackCells) {
      const leftPanelCell = document.createElement('div');
      leftPanelCell.classList.add('count__cell');
      leftPanelCell.innerText = '0';
      leftPanelRow.append(leftPanelCell);
    }
  }
}

export function displayCountCellsTop(matrixTemplate, gameContainer) {
  let topPanelContainer = document.querySelector('.count-cells__top-container');
  if (topPanelContainer) {
    topPanelContainer.remove();
  }

  const rotatedMatrix = rotateMatrix(matrixTemplate);

  topPanelContainer = document.createElement('div');
  topPanelContainer.classList.add('count-cells__top-container');
  gameContainer.append(topPanelContainer);

  for (let i = 0; i < rotatedMatrix.length; i++) {
    const topPanelColumn = document.createElement('div');
    topPanelColumn.classList.add('count-cells__top-column');
    topPanelContainer.append(topPanelColumn);
    topPanelColumn.dataset.columnId = i;

    if (i % 5 === 0 && i !== 0) {
      topPanelColumn.classList.add('bold-line__left--top');
    }

    const matrixColumn = rotatedMatrix[i];
    let numberOfBlackCells = 0;
    let hasBlackCells = false;

    for (let j = 0; j < matrixColumn.length; j++) {
      if (matrixColumn[j] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
        hasBlackCells = true;
      }
      if ((matrixColumn[j] === 0 || j === matrixColumn.length - 1) && numberOfBlackCells > 0) {
        const topPanelCell = document.createElement('div');
        topPanelCell.classList.add('count__cell');
        topPanelCell.innerText = numberOfBlackCells;
        topPanelColumn.append(topPanelCell);
        numberOfBlackCells = 0;
      }
    }

    if (!hasBlackCells) {
      const topPanelCell = document.createElement('div');
      topPanelCell.classList.add('count__cell');
      topPanelCell.innerText = '0';
      topPanelColumn.append(topPanelCell);
    }
  }
}
