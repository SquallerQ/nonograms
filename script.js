const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
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
    console.log(row);
    
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
  console.log(leftPanelContainer);
  

  for (let i = 0; i < matrix.length; i++) {
    const leftPanelCell = document.createElement('div');
    leftPanelCell.classList.add('left-panel__cell');
    leftPanelContainer.append(leftPanelCell);
  }

  // matrixContainer;


}
displayLeftPanel()
console.log('Start');
