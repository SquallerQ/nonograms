const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const body = document.querySelector('body');
console.log(body);

const matrixContainer = document.createElement('div');
matrixContainer.classList.add('matrix__container')
body.append(matrixContainer);

function displayMatrix () {
  for (let i = 0; i < matrix.length; i++) {
    const row = document.createElement("div");
    row.classList.add('matrix__row')
    // console.log(row);
    
    matrixContainer.append(row);
    for (let j = 0; j < matrix[i].length; j++) {
      let matrixCell = matrix[i][j];

            // cell.classList.add("cell");

      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerHTML = matrixCell;

      row.append(cell);

      // matrixCell.classList.add('cell')
      
    }
    
    
  };
  

}

displayMatrix();

function displayLeftPanel () {
  const leftPanelContainer = document.createElement('div')
  leftPanelContainer.classList.add("left-panel__container");
  body.append(leftPanelContainer);
  
  for (let i = 0; i < matrix.length; i++) {

    const leftPanelRow = document.createElement("div");
    leftPanelRow.classList.add("left-panel__row");
    leftPanelContainer.append(leftPanelRow);
    leftPanelRow.dataset.rowId = i;

    const matrixRow = matrix[i];
    let numberOfBlackCells = 0;
    for (let j = 0; j < matrixRow.length; j++) {

      if (matrixRow[j] > 0 && matrixRow[j + 1] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
      } else if (matrixRow[j] > 0 && matrixRow[j + 1] === 0) {
        numberOfBlackCells = numberOfBlackCells + 1;

        const leftPanelCell = document.createElement("div");
        leftPanelCell.classList.add("left-panel__cell");
        leftPanelCell.innerText = numberOfBlackCells;
        
        const leftPanelRow = document.querySelector(`[data-row-id="${i}"]`);
        leftPanelRow.append(leftPanelCell);

        numberOfBlackCells = 0;       
      }
    }
    if (!matrixRow.includes(1)) {
      console.log(true);
      const leftPanelCell = document.createElement("div");
      leftPanelCell.classList.add("left-panel__cell");
      leftPanelCell.innerText = numberOfBlackCells;
      const leftPanelRow = document.querySelector(`[data-row-id="${i}"]`);
      leftPanelRow.append(leftPanelCell);
    }

  }

  // matrixContainer;


}
displayLeftPanel()
console.log('Start');
