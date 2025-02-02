const gameOptions = {
  difficult: "easy",
  selectedTemplate: "smile",
  isStarted: false,
  inProcess: false,
  isSolution: false
};
let matrixTemplate;

const templatesObject = {
  easy: {
    smile: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
    airplane: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
    ],
    tower: [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ],
    psy: [
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    hourglass: [
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  medium: {
    televisor: [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    ],
    note: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    cherry: [
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
      [1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    ],
    cup: [
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ],
    tree: [
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
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
    home: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    clover: [
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    duck: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    ],
  },
};

const easyTemplates = ["smile", "airplane", "tower", "psy", "hourglass"];
const mediumTemplates = ["televisor", "note", "cherry", "cup", "tree"];
const hardTemplates = ["mushrooms", "elk", "home", "clover", "duck"];

// matrix for game
let emptyMatrix = [];

// for timer
let timerInterval;
let timePassed = 0;
let isPaused = false; 
let isLoaded = false;

const body = document.querySelector("body");

const mainContainer = document.createElement("div");
mainContainer.classList.add("main__container");
body.append(mainContainer);

const leftPanel = document.createElement("div");
leftPanel.classList.add("left__container");
mainContainer.append(leftPanel);

const gameContainer = document.createElement("div");
gameContainer.classList.add("game__container");
mainContainer.append(gameContainer);

const matrixContainer = document.createElement("div");
matrixContainer.classList.add("matrix__container");
gameContainer.append(matrixContainer);

matrixContainer.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const rightPanel = document.createElement("div");
rightPanel.classList.add("right__container");
mainContainer.append(rightPanel);

function startGame () {
  createDifficultPanel();
  createTemplatesPanel();

  displayCountCellsLeft();
  displayCountCellsTop();
  displayMatrix();
}
startGame()

function rightPanelButtons () {
  showSolutionButton();
  addTimerOnPage();
  resetGameButton();
  randomGameButton();
  saveGameButton();
  loadGameButton();
}
rightPanelButtons()


function displayMatrix() {
  matrixContainer.innerHTML = "";

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


function changeEmptyMatrix(event) {
  event.preventDefault();

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
      emptyMatrix[rowNumber][cellNumber] = -1;
    }
  } else {
    return;
  }
  compareMatrix(emptyMatrix);
  gameOptions.isStarted = true;
  gameToggler()
}

function displayCountCellsLeft() {
  let leftPanelContainer = document.querySelector(".count-cells__left-container");
  if (leftPanelContainer) {
    leftPanelContainer.remove();
  }
  leftPanelContainer = document.createElement("div");
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
function createEmptyMatrix(matrix) {
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
function compareMatrix(matrix) {
  const matrixTemplateString = matrixTemplate.join(",");
  const matrixPlayerClickedString = matrix.join(",");
  if (matrixTemplateString === matrixPlayerClickedString) {
    createVictoryPopup();
    matrixContainer.removeEventListener("click", changeEmptyMatrix);
    matrixContainer.removeEventListener("contextmenu", changeEmptyMatrix);
  }
}

function createTemplatesPanel(_gameDifficult, _gameTemplate) { 
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

  let gameDifficult;
  if (_gameDifficult === undefined) {
    gameDifficult = gameOptions.difficult;
  } else {
    gameDifficult = _gameDifficult;
  }

  let templates;

  if (gameDifficult === "easy") {
    templates = easyTemplates;
  } else if (gameDifficult === "medium") {
    templates = mediumTemplates;
  } else if (gameDifficult === "hard") {
    templates = hardTemplates;
  }
  if (_gameTemplate === false || !templates.includes(_gameTemplate)) {
    _gameTemplate = templates[0];
  }

  templates.forEach((templateName) => {
    const item = document.createElement("div");
    item.textContent = templateName;
    item.classList.add("template__item");
 
    if (templateName === _gameTemplate) {
      item.classList.add("template__item--active");
    }

    item.addEventListener("click", () => {
      if (gameOptions.isStarted === false) {
        const allItems = document.querySelectorAll(".template__item");
        allItems.forEach((el) => el.classList.remove("template__item--active"));

        item.classList.add("template__item--active");

        gameOptions.selectedTemplate = templateName;

        gameOptions.isSolution = false;
        isLoaded = false;
        gameToggler();

        changeTemplate(gameDifficult, templateName);
      } else if (gameOptions.isStarted === true && item.textContent === gameOptions.selectedTemplate) {
        console.log(true, item.textContent);
      } else {
        async function abortGame() {
          const userDecision = await showWarningPopup(
            "Are you want to change the template? Your progress will be lost."
          );
          if (userDecision === true) {
            const allItems = document.querySelectorAll(".template__item");
            allItems.forEach((el) =>
              el.classList.remove("template__item--active")
            );

            item.classList.add("template__item--active");

            gameOptions.selectedTemplate = templateName;

            changeTemplate(gameDifficult, templateName);

            gameOptions.isStarted = false;
            gameOptions.inProcess = false;
            gameOptions.isSolution = false;
            isLoaded = false;
            console.log('tut');
            
            resetTimer();
            gameToggler();
          } else {
            return;
          }
        }
        abortGame();
      }
    });

    templateContainer.append(item);
  });
  changeTemplate(gameDifficult, _gameTemplate);
}

function createDifficultPanel() {
  const difficultContainer = document.createElement("div");
  difficultContainer.classList.add("difficult__container");
  leftPanel.append(difficultContainer);

  let templateName;

  const easyButton = document.createElement("div");
  easyButton.classList.add("difficult__button");
  easyButton.classList.add("difficult__button--active");
  easyButton.textContent = "Easy";
  easyButton.addEventListener("click", function () {
    if (gameOptions.isStarted === false && gameOptions.difficult !== "easy") {
      easyButton.classList.add("difficult__button--active");
      mediumButton.classList.remove("difficult__button--active");
      hardButton.classList.remove("difficult__button--active");

      gameOptions.difficult = "easy";
      templateName = easyTemplates[0];
      gameOptions.selectedTemplate = templateName;

      gameOptions.isSolution = false;
      gameToggler();

      createTemplatesPanel();
      changeTemplate(gameOptions.difficult, templateName);
    } else if (gameOptions.isStarted === true && gameOptions.difficult === "easy") {
      return;
    } else {
      async function abortGame() {
        const userDecision = await showWarningPopup("Are you want to change the difficulty? Your progress will be lost.");
        if (userDecision === true) {
          easyButton.classList.add("difficult__button--active");
          mediumButton.classList.remove("difficult__button--active");
          hardButton.classList.remove("difficult__button--active");

          gameOptions.difficult = "easy";
          templateName = easyTemplates[0];
          gameOptions.selectedTemplate = templateName;
          createTemplatesPanel();
          changeTemplate(gameOptions.difficult, templateName);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          gameToggler();
          resetTimer();
        } else {
          return;
        }
      }
      abortGame();
    }
  });
  const mediumButton = document.createElement("div");
  mediumButton.classList.add("difficult__button");
  mediumButton.textContent = "Medium";
  mediumButton.addEventListener("click", function () {
    if (gameOptions.isStarted === false) {
      easyButton.classList.remove("difficult__button--active");
      mediumButton.classList.add("difficult__button--active");
      hardButton.classList.remove("difficult__button--active");

      gameOptions.difficult = "medium";
      templateName = mediumTemplates[0];
      gameOptions.selectedTemplate = templateName;

      gameOptions.isSolution = false;
      gameToggler();

      createTemplatesPanel();
      changeTemplate(gameOptions.difficult, templateName);
    } else if (gameOptions.isStarted === true && gameOptions.difficult === "medium") {
      return;
    } else {
      async function abortGame() {
        const userDecision = await showWarningPopup("Are you want to change the difficulty? Your progress will be lost.");
        if (userDecision === true) {
          easyButton.classList.remove("difficult__button--active");
          mediumButton.classList.add("difficult__button--active");
          hardButton.classList.remove("difficult__button--active");
          gameOptions.difficult = "medium";
          templateName = mediumTemplates[0];
          gameOptions.selectedTemplate = templateName;
          createTemplatesPanel();
          changeTemplate(gameOptions.difficult, templateName);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          gameToggler();
          resetTimer();
        } else {
          return;
        }
      }
      abortGame();
    }
  });

  const hardButton = document.createElement("div");
  hardButton.classList.add("difficult__button");
  hardButton.textContent = "Hard";
  hardButton.addEventListener("click", function () {
    if (gameOptions.isStarted === false) {
      easyButton.classList.remove("difficult__button--active");
      mediumButton.classList.remove("difficult__button--active");
      hardButton.classList.add("difficult__button--active");

      gameOptions.difficult = "hard";
      templateName = hardTemplates[0];

      gameOptions.selectedTemplate = templateName;
      gameOptions.isSolution = false;
      gameToggler();

      createTemplatesPanel();
      changeTemplate(gameOptions.difficult, templateName);
    } else if (gameOptions.isStarted === true && gameOptions.difficult === "hard") {
      return;
    } else {
      async function abortGame() {
        const userDecision = await showWarningPopup("Are you want to change the difficulty? Your progress will be lost.");
        if (userDecision === true) {
          easyButton.classList.remove("difficult__button--active");
          mediumButton.classList.remove("difficult__button--active");
          hardButton.classList.add("difficult__button--active");
          gameOptions.difficult = "hard";

          templateName = hardTemplates[0];
          gameOptions.selectedTemplate = templateName;
          createTemplatesPanel();
          changeTemplate(gameOptions.difficult, templateName);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          gameToggler();
          resetTimer();
        } else {
          return;
        }
      }
      abortGame();
    }
  });

  difficultContainer.append(easyButton, mediumButton, hardButton);
}

function changeTemplate(_gameDifficult, _templateName) {
  let activeTemplate = templatesObject[_gameDifficult][_templateName];

  if (activeTemplate === undefined) {
    activeTemplate = templatesObject.hard.mushrooms;
  }

  matrixTemplate = activeTemplate;

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
  displayMatrix();
  displayCountCellsLeft();
  displayCountCellsTop();
}

function showSolutionButton() {
  const solutionButton = document.createElement("div");
  solutionButton.classList.add("solution__button");
  solutionButton.textContent = "Show Solution";

  solutionButton.addEventListener("click", () => {

    if (gameOptions.isStarted === false) {
      const actualTemplate = templatesObject[gameOptions.difficult][gameOptions.selectedTemplate];
      emptyMatrix = actualTemplate.map((row) => [...row]);
      updateMatrixOnDisplay();
      matrixContainer.removeEventListener("click", changeEmptyMatrix);
      matrixContainer.removeEventListener("contextmenu", changeEmptyMatrix);
      gameOptions.isSolution = true;
      gameToggler();
    } else {
      async function abort() {
        const userDecision = await showWarningPopup("Are you want to show the solution? Your progress will be lost.");
        if (userDecision === true) {
          const actualTemplate = templatesObject[gameOptions.difficult][gameOptions.selectedTemplate];
          emptyMatrix = actualTemplate.map((row) => [...row]);
          updateMatrixOnDisplay();
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = true;
          resetTimer();
          gameToggler();
          matrixContainer.removeEventListener("click", changeEmptyMatrix);
          matrixContainer.removeEventListener("contextmenu", changeEmptyMatrix);
        } else {
          return;
        }
      }
      abort()
    }
  });
  rightPanel.append(solutionButton);
}
function clearMatrix() {
  for (let i = 0; i < emptyMatrix.length; i++) {
    for (let j = 0; j < emptyMatrix[i].length; j++) {
      emptyMatrix[i][j] = 0;
    }
  }
}

function updateMatrixOnDisplay(withCross = false) { 
  const matrixContainer = document.querySelector(".matrix__container");
  const cells = matrixContainer.querySelectorAll(".cell");

  emptyMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellIndex = rowIndex * emptyMatrix[0].length + colIndex;
      if (cells[cellIndex]) {
        if (cell === 1 && withCross === false) {
          cells[cellIndex].classList.remove("cell-cross");
          cells[cellIndex].classList.add("cell-active");
          console.log(true);
        } 
        else if (cell === 1 && withCross === true) {
          cells[cellIndex].classList.add("cell-active");
        }
        else if (cell === -1 && withCross === true) {
          cells[cellIndex].classList.add("cell-cross");
        } else {
          cells[cellIndex].classList.remove("cell-active", "cell-cross");
        }
      }
    });
  });
}

function addTimerOnPage() {
  timer = document.createElement("div");
  timer.classList.add("timer");
  timer.innerHTML = "00:00";
  rightPanel.append(timer);
}

function startTimer() {
  clearInterval(timerInterval);
  isPaused = false;

  timerInterval = setInterval(() => {
    if (isPaused === false) {
    timePassed++;
    updateTimerOnPage();
    }
  }, 1000);
}
function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
}
function updateTimerOnPage () {
  const timer = document.querySelector(".timer");

  const minutes = Math.floor(timePassed / 60).toString().padStart(2, "0");
  const seconds = (timePassed % 60).toString().padStart(2, "0");
  timer.innerHTML = `${minutes}:${seconds}`;
}
function resetTimer() {
  clearInterval(timerInterval);
  timePassed = 0;
  isPaused = true;
  updateTimerOnPage();
}

function resetGameButton () {
  const resetGameButton = document.createElement("div");
  resetGameButton.classList.add("reset__button");
  resetGameButton.textContent = "Reset Game";

  resetGameButton.addEventListener("click", () => {
    if (gameOptions.isStarted === false && gameOptions.isSolution === false) {
      return;
    } else {
      async function abort() {
        const userDecision = await showWarningPopup("Are you want to reset the game? Your progress will be lost.");
        if (userDecision === true) {                
          clearMatrix();
          updateMatrixOnDisplay();
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          isLoaded = false;
          resetTimer();
          gameToggler();
          matrixContainer.addEventListener("click", changeEmptyMatrix);
          matrixContainer.addEventListener("contextmenu", changeEmptyMatrix);
        } else {
          return;
        }
      }
      abort();
    }
  });
  rightPanel.append(resetGameButton);  
}

function randomGameButton() {
  const randomGameButton = document.createElement("div");
  randomGameButton.classList.add("random__button");
  randomGameButton.textContent = "Random Game";

  randomGameButton.addEventListener("click", () => {
    if (gameOptions.isStarted === false) {      
      const activeDifficultButton = document.querySelector('.difficult__button--active');
      activeDifficultButton.classList.remove('difficult__button--active');

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      let randomDifficultIndex = getRandomInt(3);

      let templates
      let nameOfTemplate
      let currentTemplateIndex;

      if (randomDifficultIndex === 0) {
        templates = easyTemplates;
      } else if (randomDifficultIndex === 1) {
        templates = mediumTemplates;
      } else {
        templates = hardTemplates;
      }

      currentTemplateIndex = templates.indexOf(gameOptions.selectedTemplate);

      let nextTemplateIndex = (currentTemplateIndex + 1) % templates.length;
      nameOfTemplate = templates[nextTemplateIndex];

      const difficultButtons = document.querySelectorAll(".difficult__button");
      difficultButtons[randomDifficultIndex].classList.add("difficult__button--active");

      const getDifficult = difficultButtons[randomDifficultIndex].textContent.toLowerCase();
      
      gameOptions.difficult = getDifficult;
      gameOptions.selectedTemplate = nameOfTemplate;
      gameOptions.isSolution = false;

      gameToggler();
      createTemplatesPanel(getDifficult, nameOfTemplate);
      updateMatrixOnDisplay();
    } else {
      async function abort() {
        const userDecision = await showWarningPopup("Are you want to choose a random template? Your progress will be lost.");
        if (userDecision === true) {
          const activeDifficultButton = document.querySelector('.difficult__button--active');
          activeDifficultButton.classList.remove('difficult__button--active');

          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

          let randomDifficultIndex = getRandomInt(3);
        
          let templates
          let nameOfTemplate
          let currentTemplateIndex;
        
          if (randomDifficultIndex === 0) {
            templates = easyTemplates;
          } else if (randomDifficultIndex === 1) {
            templates = mediumTemplates;
          } else {
            templates = hardTemplates;
          }
        
          currentTemplateIndex = templates.indexOf(gameOptions.selectedTemplate);
        
          let nextTemplateIndex = (currentTemplateIndex + 1) % templates.length;
          nameOfTemplate = templates[nextTemplateIndex];

          const difficultButtons = document.querySelectorAll(".difficult__button");
          difficultButtons[randomDifficultIndex].classList.add("difficult__button--active");

          const getDifficult = difficultButtons[randomDifficultIndex].textContent.toLowerCase();

          gameOptions.difficult = getDifficult;
          gameOptions.selectedTemplate = nameOfTemplate;

          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          gameToggler();
          resetTimer();

          createTemplatesPanel(getDifficult, nameOfTemplate);
          updateMatrixOnDisplay();
        } else {
          return;
        }
      }
      abort();
    }
  });
  rightPanel.append(randomGameButton);
}

function saveGameButton () {
  const saveGameButton = document.createElement("div");
  saveGameButton.classList.add("save__button");
  saveGameButton.textContent = "Save Game";
  saveGameButton.addEventListener('click', function () {
    localStorage.setItem('gameOptions', JSON.stringify(gameOptions));
    localStorage.setItem("gameGrid", JSON.stringify(emptyMatrix));
    localStorage.setItem("timePassed", timePassed.toString()); 
  })

  rightPanel.append(saveGameButton);  
}
function loadGameButton () {
  
  const loadGameButton = document.createElement("div");
  loadGameButton.classList.add("load__button");
  loadGameButton.textContent = "Load Game";
  loadGameButton.addEventListener('click', function () {
  if (gameOptions.isStarted === false) {    
    const savedGame = localStorage.getItem('gameOptions');
    const savedGrid = localStorage.getItem("gameGrid");
    const savedTime = localStorage.getItem("timePassed");    

    if (savedGame) {
      Object.assign(gameOptions, JSON.parse(savedGame));

      const difficultButtons = document.querySelectorAll(".difficult__button");
      difficultButtons.forEach((button) => {
        if (button.textContent.toLowerCase() === gameOptions.difficult) {
          button.classList.add("difficult__button--active");
        } else {
          button.classList.remove("difficult__button--active");
        }
      });
    
      createTemplatesPanel(gameOptions.difficult, gameOptions.selectedTemplate);
      // updateMatrixOnDisplay();
    }
    if (savedGrid) {
      emptyMatrix = JSON.parse(savedGrid);
      updateMatrixOnDisplay(true);
    }
    if (savedTime) {
      gameToggler();
      timePassed = parseInt(savedTime);
      updateTimerOnPage();
      pauseTimer();
      isLoaded = true;
    }
  } else {
      async function abort() {
        const userDecision = await showWarningPopup("Are you want to load a saved game? Your progress will be lost.");
        if (userDecision === true) {
          const savedGame = localStorage.getItem("gameOptions");
          const savedGrid = localStorage.getItem("gameGrid");
          const savedTime = localStorage.getItem("timePassed");

          if (savedGame) {
            Object.assign(gameOptions, JSON.parse(savedGame));
          
            const difficultButtons = document.querySelectorAll(".difficult__button");
            difficultButtons.forEach((button) => {
              if (button.textContent.toLowerCase() === gameOptions.difficult) {
                button.classList.add("difficult__button--active");
              } else {
                button.classList.remove("difficult__button--active");
              }
            });
          
            createTemplatesPanel(
              gameOptions.difficult,
              gameOptions.selectedTemplate
            );
            // updateMatrixOnDisplay();
          }
          if (savedGrid) {
            emptyMatrix = JSON.parse(savedGrid);
            updateMatrixOnDisplay(true);
          }
          if (savedTime) {
            gameToggler();
            timePassed = parseInt(savedTime);
            updateTimerOnPage();
            pauseTimer();
            isLoaded = true;
          }
        } else {
          return;
        }
      }
      abort();
    }
  })

  rightPanel.append(loadGameButton);  
}

function gameToggler() {  
  const resetGameButton = document.querySelector(".reset__button");
    
  if (isLoaded === true) {
    console.log(true);
    
    startTimer()
    resumeTimer();
    isLoaded = false;
  }
  if (gameOptions.isStarted === true || gameOptions.isSolution === true) {
    resetGameButton.classList.add("reset__button-active");  
  }
  if (gameOptions.isStarted === true && gameOptions.inProcess === false) {
    startTimer();
    
    gameOptions.inProcess = true;   
  } else if (gameOptions.isStarted === true && gameOptions.inProcess === true) {    
    return;
  } else if (gameOptions.isStarted === false && gameOptions.inProcess === false && gameOptions.isSolution === false) {      
    resetGameButton.classList.remove("reset__button-active");
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

function showWarningPopup(message = 'You sure?') {
  return new Promise((resolve) => {
  pauseTimer();
  
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup__container");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup__content");

  const popupMessage = document.createElement("p");
  popupMessage.classList.add("popup__message");
  popupMessage.innerText = message;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("popup__buttons");

  const closeButton = document.createElement("div");
  closeButton.classList.add("popup__close-button");
  closeButton.innerHTML = "&times;";

  const okButton = document.createElement("div");
  okButton.classList.add("popup__ok-button");
  okButton.textContent = "OK";

  okButton.addEventListener("click", () => {
    closePopup();
    resolve(true);
  });

  const cancelButton = document.createElement("div");
  cancelButton.classList.add("popup__cancel-button");
  cancelButton.textContent = "Cancel";

  cancelButton.addEventListener("click", () => {
    closePopup();
    resolve(false);
  });
  closeButton.addEventListener("click", () => {
    closePopup();
    resolve(false);
  });


  buttonsContainer.append(okButton, cancelButton);
  popupContent.append(closeButton, popupMessage, buttonsContainer);
  popupContainer.append(popupContent);
  document.body.appendChild(popupContainer);

  function closePopup() {
    popupContainer.remove();
    resumeTimer(); 
  }

  });
}
// showWarningPopup()
