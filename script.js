let matrixTemplate = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const templateObject = {
  easy: {
    easy: [
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ],
  },
  medium: [
    
  ],
  hard: {
    mushrooms: [
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    elk: [
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  ],
  },
};


const easyTemplates = ['easy', 'item1', 'item2','item3','item4','item5']
const mediumTemplates = ['medium', 'item1', 'item2','item3','item4','item5']
const hardTemplates = ['mushrooms', 'elk', 'item2','item3','item4','item5']

let emptyMatrix = [];

const gameOptions = {
  difficult: "easy",
  // templateName: "mushrooms",
  selectedTemplate: ''
};

const body = document.querySelector('body');

const mainContainer = document.createElement("div");
mainContainer.classList.add("main__container");
body.append(mainContainer);

const leftPanel = document.createElement("div");
leftPanel.classList.add("left__container");
mainContainer.append(leftPanel);




const gameContainer = document.createElement("div");
gameContainer.classList.add("game__container");
mainContainer.append(gameContainer);


const matrixContainer = document.createElement('div');
matrixContainer.classList.add('matrix__container')
gameContainer.append(matrixContainer);


matrixContainer.addEventListener('contextmenu', function(e) {
  e.preventDefault();
})

const rightPanel = document.createElement("div");
rightPanel.classList.add("right__container");
mainContainer.append(rightPanel);

createDifficultPanel();
createTemplatesPanel(gameOptions);

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


function displayCountCellsLeft () {
  let leftPanelContainer = document.querySelector(".count-cells__left-container");
  if (leftPanelContainer) {      
    leftPanelContainer.remove();
  }
  leftPanelContainer = document.createElement('div')
  leftPanelContainer.classList.add("count-cells__left-container");
  gameContainer.append(leftPanelContainer);
  
  for (let i = 0; i < matrixTemplate.length; i++) {
    const leftPanelRow = document.createElement("div");
    leftPanelRow.classList.add("count-cells__left-row");
    leftPanelContainer.append(leftPanelRow);
    leftPanelRow.dataset.rowId = i;

    const matrixRow = matrixTemplate[i];
    let numberOfBlackCells = 0;
    let hasBlackCells = false;
    
    for (let j = 0; j < matrixRow.length; j++) {
      if (matrixRow[j] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
        hasBlackCells = true;
      }
       if ((matrixRow[j] === 0 || j === matrixRow.length - 1) && numberOfBlackCells > 0) {
         const leftPanelCell = document.createElement("div");
         leftPanelCell.classList.add("count__cell");
         leftPanelCell.innerText = numberOfBlackCells;
         leftPanelRow.append(leftPanelCell);

         numberOfBlackCells = 0;
       }
    }
    if (!hasBlackCells) {
      const leftPanelCell = document.createElement("div");
      leftPanelCell.classList.add("count__cell");
      leftPanelCell.innerText = "0";
      leftPanelRow.append(leftPanelCell);
    }
  }
}
displayCountCellsLeft()

function displayCountCellsTop() {
  let topPanelContainer = document.querySelector(".count-cells__top-container");
  if (topPanelContainer) {
    topPanelContainer.remove();
  }

  const rotatedMatrix = rotateMatrix(matrixTemplate);

  topPanelContainer = document.createElement("div");
  topPanelContainer.classList.add("count-cells__top-container");
  gameContainer.append(topPanelContainer);

  for (let i = 0; i < rotatedMatrix.length; i++) {
    const topPanelColumn = document.createElement("div");
    topPanelColumn.classList.add("count-cells__top-column");
    topPanelContainer.append(topPanelColumn);
    topPanelColumn.dataset.columnId = i;

    const matrixColumn = rotatedMatrix[i];
    let numberOfBlackCells = 0;
    let hasBlackCells = false;

    for (let j = 0; j < matrixColumn.length; j++) {
      if (matrixColumn[j] > 0) {
        numberOfBlackCells = numberOfBlackCells + 1;
        hasBlackCells = true;
      }
       if ((matrixColumn[j] === 0 || j === matrixColumn.length - 1) && numberOfBlackCells > 0) {
        const topPanelCell = document.createElement("div");
        topPanelCell.classList.add("count__cell");
        topPanelCell.innerText = numberOfBlackCells;
        topPanelColumn.append(topPanelCell);
        numberOfBlackCells = 0;
      }
    }

    if (!hasBlackCells) {
      const topPanelCell = document.createElement("div");
      topPanelCell.classList.add("count__cell");
      topPanelCell.innerText = "0";
      topPanelColumn.append(topPanelCell);
    }
  }
}
displayCountCellsTop();


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
  let templateContainer = document.querySelector(".template__container");

  if (templateContainer) {
    templateContainer.remove();
  }

  templateContainer = document.createElement("div");
  templateContainer.classList.add("template__container");
  leftPanel.append(templateContainer);

  const templateHeadline = document.createElement("div");
  templateHeadline.classList.add("template__container-headline");
  templateHeadline.textContent = "Templates:";
  templateContainer.append(templateHeadline);

  const gameDifficult = _gameOptions.difficult;

  let templates;

    if (gameDifficult === "easy") {
      templates = easyTemplates;
    } else if (gameDifficult === "medium") {
      templates = mediumTemplates;
    } else if (gameDifficult === "hard") {
      templates = hardTemplates;
    }
    gameOptions.selectedTemplate = templates[0]; 
    

    templates.forEach((templateName, index) => {
      const item = document.createElement("div");
      item.textContent = templateName;
      item.classList.add("template__item");

      if (index === 0) {
        item.classList.add("template__item--active");
      }

      item.addEventListener("click", () => {
        const allItems = document.querySelectorAll(".template__item")
        allItems.forEach((el) =>
          el.classList.remove("template__item--active")
        );

        item.classList.add("template__item--active");

        gameOptions.selectedTemplate = templateName;

        changeTemplate(gameDifficult, templateName);
      });
      templateContainer.append(item);
    });
  changeTemplate(gameDifficult, templates[0]);
}

function createDifficultPanel () {
  const difficultContainer = document.createElement("div");
  difficultContainer.classList.add("difficult__container");
  leftPanel.append(difficultContainer);

  let templateName;

  const easyButton = document.createElement("div");
  easyButton.classList.add('difficult__button');
  easyButton.classList.add('difficult__button--active');
  easyButton.textContent = 'Easy';
  easyButton.addEventListener("click", function () {
    easyButton.classList.add('difficult__button--active');
    mediumButton.classList.remove("difficult__button--active");
    hardButton.classList.remove("difficult__button--active");

    gameOptions.difficult = 'easy';
    templateName = easyTemplates[0];
    createTemplatesPanel(gameOptions);
    changeTemplate(gameOptions.difficult, templateName);
  });
  const mediumButton = document.createElement("div");
  mediumButton.classList.add("difficult__button");
  mediumButton.textContent = "Medium";
  mediumButton.addEventListener("click", function () {
    easyButton.classList.remove("difficult__button--active");
    mediumButton.classList.add("difficult__button--active");
    hardButton.classList.remove("difficult__button--active");

    gameOptions.difficult = "medium";
    templateName = mediumTemplates[0];
    createTemplatesPanel(gameOptions);
    changeTemplate(gameOptions.difficult, templateName);
  });

  const hardButton = document.createElement("div");
  hardButton.classList.add("difficult__button");
  hardButton.textContent = 'Hard';
  hardButton.addEventListener("click", function () {
    easyButton.classList.remove("difficult__button--active");
    mediumButton.classList.remove("difficult__button--active");
    hardButton.classList.add("difficult__button--active");

    gameOptions.difficult = "hard";
    templateName = hardTemplates[0];
    createTemplatesPanel(gameOptions);
    changeTemplate(gameOptions.difficult, templateName);
  });

  difficultContainer.append(easyButton, mediumButton, hardButton);

}

function changeTemplate(_gameDifficult, _templateName) {
  let activeTemplate = templateObject[_gameDifficult][_templateName];
  
  if (activeTemplate === undefined) {
    activeTemplate = templateObject.hard.mushrooms;
  } 

  matrixTemplate = activeTemplate;
  console.log(matrixTemplate);
  
  for (let i = 0; i < emptyMatrix.length; i++) {
    for (let j = 0; j < emptyMatrix[i].length; j++) {
      emptyMatrix[i][j] = 0;
      const cell = document.querySelector(
        `.matrix__row[data-row="${i}"] .cell[data-cell="${j}"]`
      );
      if (cell) {
        cell.classList.remove("cell-active", "cell-cross");
      }
    }
  }
  displayCountCellsLeft();
  displayCountCellsTop();
}

function showSolution () {
  const solutionButton = document.createElement('div');
  solutionButton.classList.add('solution__button');
  solutionButton.textContent = 'Show Solution'

  solutionButton.addEventListener('click', () => {
    const actualTemplate = templateObject[gameOptions.difficult][gameOptions.selectedTemplate];

    emptyMatrix = actualTemplate.map((row) => [...row]);
    updateMatrixOnDisplay();
  })
  rightPanel.append(solutionButton);
}
showSolution()

function updateMatrixOnDisplay() {
  const matrixContainer = document.querySelector(".matrix__container");
  const cells = matrixContainer.querySelectorAll(".cell");

  emptyMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellIndex = rowIndex * emptyMatrix[0].length + colIndex;
      if (cells[cellIndex]) {
        if (cell === 1) {
          cells[cellIndex].classList.add("cell-active");
        } else {
          cells[cellIndex].classList.remove("cell-active");
        }
      }
    });
  });
}
