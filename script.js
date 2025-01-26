const matrixTemplate = [
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
let emptyMatrix = [];

const gameOptions = {
  difficult: 'easy',

}
const body = document.querySelector('body');

const centralContainer = document.createElement("div");
centralContainer.classList.add("central__container");
body.append(centralContainer);

createTemplatesPanel(gameOptions);
const gameContainer = document.createElement("div");
gameContainer.classList.add("game__container");
centralContainer.append(gameContainer);


const matrixContainer = document.createElement('div');
matrixContainer.classList.add('matrix__container')
gameContainer.append(matrixContainer);



matrixContainer.addEventListener('contextmenu', function(e) {
  e.preventDefault();
})

function displayMatrix () {
  emptyMatrix = createEmptyMatrix(matrixTemplate);
  for (let i = 0; i < emptyMatrix.length; i++) {
    const row = document.createElement("div");
    row.classList.add("matrix__row");
    row.dataset.row = i;
    matrixContainer.append(row);
    for (let j = 0; j < emptyMatrix[i].length; j++) {
      const cell = document.createElement("div");
      cell.dataset.cell = j;
      cell.classList.add("cell");
      row.append(cell);
    }
  }

  matrixContainer.addEventListener("click", changeEmptyMatrix);
  matrixContainer.addEventListener("contextmenu", changeEmptyMatrix);
}
displayMatrix();

function changeEmptyMatrix(event) {
  event.preventDefault() 
 
  const clickedCell = event.target;
  if (clickedCell.classList.contains("cell")) {
    const row = clickedCell.closest(".matrix__row");
    const rowNumber = row.dataset.row;
    const cellNumber = clickedCell.dataset.cell;

    if (event.type === "click") {
      clickedCell.classList.remove("cell-cross");

      if (!clickedCell.classList.contains("cell-active")) {
        clickedCell.classList.add("cell-active");
        emptyMatrix[rowNumber][cellNumber] = 1;
      } else if (clickedCell.classList.contains("cell-active")) {
        clickedCell.classList.remove("cell-active");
        emptyMatrix[rowNumber][cellNumber] = 0;
      }
    } else if (event.button === 2) {
      clickedCell.classList.remove("cell-active");

      if (!clickedCell.classList.contains("cell-cross")) {
        clickedCell.classList.add("cell-cross");
      } else if (clickedCell.classList.contains("cell-cross")) {
        clickedCell.classList.remove("cell-cross");
      }
      emptyMatrix[rowNumber][cellNumber] = 0;
    }
  } else {
    return;
  }
  compareMatrix(emptyMatrix);
}


function displayLeftPanel () {
  const leftPanelContainer = document.createElement('div')
  leftPanelContainer.classList.add("left-panel__container");
  gameContainer.append(leftPanelContainer);
  
  for (let i = 0; i < matrixTemplate.length; i++) {
    const leftPanelRow = document.createElement("div");
    leftPanelRow.classList.add("left-panel__row");
    leftPanelContainer.append(leftPanelRow);
    leftPanelRow.dataset.rowId = i;

    const matrixRow = matrixTemplate[i];
    let numberOfBlackCells = 0;
    for (let j = 0; j < matrixRow.length; j++) {

      if (matrixRow[j] > 0 && matrixRow[j + 1] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
      } else if (matrixRow[j] > 0 && matrixRow[j + 1] === 0) {
        numberOfBlackCells = numberOfBlackCells + 1;

        const leftPanelCell = document.createElement("div");
        leftPanelCell.classList.add("panel__cell");
        leftPanelCell.innerText = numberOfBlackCells;
        
        const leftPanelRow = document.querySelector(`[data-row-id="${i}"]`);
        leftPanelRow.append(leftPanelCell);

        numberOfBlackCells = 0;       
      }
    }
    if (!matrixRow.includes(1)) {
      const leftPanelCell = document.createElement("div");
      leftPanelCell.classList.add("panel__cell");
      leftPanelCell.innerText = numberOfBlackCells;
      const leftPanelRow = document.querySelector(`[data-row-id="${i}"]`);
      leftPanelRow.append(leftPanelCell);
    }
  }
}
displayLeftPanel()

function displayTopPanel() {
  const rotatedMatrix = rotateMatrix(matrixTemplate);

  const topPanelContainer = document.createElement("div");
  topPanelContainer.classList.add("top-panel__container");
  gameContainer.append(topPanelContainer);

  for (let i = 0; i < rotatedMatrix.length; i++) {
    const topPanelColumn = document.createElement("div");
    topPanelColumn.classList.add("top-panel__column");
    topPanelContainer.append(topPanelColumn);
    topPanelColumn.dataset.columnId = i;

    const matrixColumn = rotatedMatrix[i];
    let numberOfBlackCells = 0;

    for (let j = 0; j < matrixColumn.length; j++) {
      if (matrixColumn[j] > 0 && matrixColumn[j + 1] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
      } else if (matrixColumn[j] > 0 && matrixColumn[j + 1] === 0) {
        numberOfBlackCells = numberOfBlackCells + 1;

        const topPanelCell = document.createElement("div");
        topPanelCell.classList.add("panel__cell");
        topPanelCell.innerText = numberOfBlackCells;

        const topPanelColumn = document.querySelector(`[data-column-id="${i}"]`);
        topPanelColumn.append(topPanelCell);

        numberOfBlackCells = 0;
      }
    }

    if (!matrixColumn.includes(1)) {
      const topPanelCell = document.createElement("div");
      topPanelCell.classList.add("panel__cell");
      topPanelCell.innerText = numberOfBlackCells;
      const topPanelColumn = document.querySelector(`[data-column-id="${i}"]`);
      topPanelColumn.append(topPanelCell);
    }
  }
}
displayTopPanel();


function rotateMatrix(matrix) {
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
function createEmptyMatrix (matrix) {
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
function compareMatrix (matrix) {
  const matrixTemplateString = matrixTemplate.join(',');
  const matrixPlayerClickedString = matrix.join(',');
  if (matrixTemplateString === matrixPlayerClickedString) {
    createVictoryPopup();
    matrixContainer.removeEventListener("click", changeEmptyMatrix);
    matrixContainer.removeEventListener("contextmenu", changeEmptyMatrix);
  }
}

function createVictoryPopup() {

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup__container");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup__content");

  const closeButton = document.createElement("div");
  closeButton.classList.add("popup__close-button");
  closeButton.innerHTML = "&times;";

  const victoryMessage = document.createElement("p");
  victoryMessage.classList.add("popup__message");
  victoryMessage.textContent = "You won";

  const timeTaken = document.createElement("p");
  timeTaken.classList.add("popup__time");
  timeTaken.textContent = "Time: 00:00";

  const okButton = document.createElement("div");
  okButton.classList.add("popup__ok-button");
  okButton.textContent = "OK";

  popupContent.append(closeButton, victoryMessage, timeTaken, okButton);
  popupContainer.append(popupContent);
  document.body.append(popupContainer);

  function closePopup() {
    popupContainer.remove();
  }

  closeButton.addEventListener("click", closePopup);
  okButton.addEventListener("click", closePopup);
}

function createTemplatesPanel (_gameOptions) {
  const templateContainer = document.createElement('div');
  templateContainer.classList.add('template__container')
  centralContainer.append(templateContainer);

  const templateHeadline = document.createElement('div');
  templateHeadline.classList.add("template__container-headline");
  templateHeadline.textContent = 'Templates:'
  templateContainer.append(templateHeadline);

  for (let i = 0; i < 6; i++) {
    const item = document.createElement('div');
    
    
  }


}

console.log('Start');
