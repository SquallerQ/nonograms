import { templatesObject, easyTemplates, mediumTemplates, hardTemplates } from './scripts/templates.js';
import { gameOptions, sounds, CELL_SIZES } from './scripts/config.js';
import { initBurgerMenu } from './scripts/burger.js';
import { rotateMatrix, createEmptyMatrix, compareMatrices, clearMatrix, updateMatrixOnDisplay, displayCountCellsLeft, displayCountCellsTop } from './scripts/matrix.js';
import { playSound, toggleSound, toggleTheme } from './scripts/settings.js';
import { saveResult } from './scripts/storage.js';
import { createTimer, createMainStructure  } from './scripts/dom-builder.js';

let matrixTemplate;

// matrix for game
let emptyMatrix = [];

// for timer
let timerInterval;
let timePassed = 0;
let isPaused = false; 
let isLoaded = false;

const { topContainer, leftPanel, gameContainer, matrixContainer, rightPanel } = createMainStructure();

function startGame () {
  createDifficultPanel();
  createTemplatesPanel();

  displayCountCellsLeft(matrixTemplate, gameContainer);
  displayCountCellsTop(matrixTemplate, gameContainer);
  displayMatrix();
  changeCellsSize(); 
}
startGame()

function topContainerButtons () {
  showResultsButton();
  toggleThemeButton();
  toggleSoundButton();
}
topContainerButtons();

function rightPanelButtons () {
  showSolutionButton();
  const timer = createTimer();
  rightPanel.append(timer);
  resetGameButton();
  randomGameButton();
  saveGameButton();
  loadGameButton();
}
rightPanelButtons();
initBurgerMenu();

function displayMatrix() {
  matrixContainer.innerHTML = '';

  emptyMatrix = createEmptyMatrix(matrixTemplate);
  for (let i = 0; i < emptyMatrix.length; i++) {
    const row = document.createElement('div');
    row.classList.add('matrix__row');
    row.dataset.row = i;

    if (i % 5 === 0 && i !== 0) {
      row.classList.add('bold-line');
    }

    matrixContainer.append(row);
    for (let j = 0; j < emptyMatrix[i].length; j++) {
      const cell = document.createElement('div');
      cell.dataset.cell = j;
      cell.classList.add('cell');

      if (j % 5 === 0 && j !== 0) {
        cell.classList.add('bold-line__left');
      }

      row.append(cell);
    }
  }

  matrixContainer.addEventListener('click', changeEmptyMatrix);
  matrixContainer.addEventListener('contextmenu', changeEmptyMatrix);
}


function changeEmptyMatrix(event) {
  event.preventDefault();

  const clickedCell = event.target;
  if (clickedCell.classList.contains('cell')) {
    const row = clickedCell.closest('.matrix__row');
    const rowNumber = row.dataset.row;
    const cellNumber = clickedCell.dataset.cell;

    if (event.type === 'click') {
      clickedCell.classList.remove('cell-cross');

      if (!clickedCell.classList.contains('cell-active')) {
        clickedCell.classList.add('cell-active');
        emptyMatrix[rowNumber][cellNumber] = 1;
        playSound(sounds.leftClick)
      } else if (clickedCell.classList.contains('cell-active')) {
        clickedCell.classList.remove('cell-active');
        emptyMatrix[rowNumber][cellNumber] = 0;
        playSound(sounds.eraseClick);
      }
    } else if (event.button === 2) {
      clickedCell.classList.remove('cell-active');

      if (!clickedCell.classList.contains('cell-cross')) {
        clickedCell.classList.add('cell-cross');
        emptyMatrix[rowNumber][cellNumber] = -1;
        playSound(sounds.rightClick);
      } else if (clickedCell.classList.contains('cell-cross')) {
        clickedCell.classList.remove('cell-cross');
        playSound(sounds.eraseClick);
        emptyMatrix[rowNumber][cellNumber] = 0;
      }
    }
  } else {
    return;
  }
  compareMatrix(emptyMatrix);
  gameOptions.isStarted = true;
  gameToggler()
}

function compareMatrix(matrix) {
  if (compareMatrices(matrixTemplate, matrix)) {
    createVictoryPopup();
    saveResult(gameOptions.selectedTemplate, gameOptions.difficult, timePassed);
    playSound(sounds.gameWin);
    matrixContainer.removeEventListener('click', changeEmptyMatrix);
    matrixContainer.removeEventListener('contextmenu', changeEmptyMatrix);
  }
}

function createTemplatesPanel(_gameDifficult, _gameTemplate) { 
  let templateContainer = document.querySelector('.template__container');

  if (templateContainer) {
    templateContainer.remove();
  }

  templateContainer = document.createElement('div');
  templateContainer.classList.add('template__container');
  leftPanel.append(templateContainer);

  const templateHeadline = document.createElement('div');
  templateHeadline.classList.add('template__container-headline');
  templateHeadline.textContent = 'Templates:';
  templateContainer.append(templateHeadline);

  const gameDifficult = _gameDifficult || gameOptions.difficult;
  
  const templatesMap = {
    easy: easyTemplates,
    medium: mediumTemplates,
    hard: hardTemplates
  };
  const templates = templatesMap[gameDifficult];
  
  const selectedTemplate = (_gameTemplate && templates.includes(_gameTemplate)) ? _gameTemplate : templates[0];

  async function handleTemplateClick(templateName) {
    if (gameOptions.isStarted === false) {
      selectTemplate(templateName);
    } else if (templateName === gameOptions.selectedTemplate) {
      return;
    } else {
      const userDecision = await showWarningPopup(
        'Are you want to change the template? Your progress will be lost.'
      );
      if (userDecision) {
        selectTemplate(templateName);
        gameOptions.isStarted = false;
        gameOptions.inProcess = false;
        gameOptions.isSolution = false;
        isLoaded = false;
        resetTimer();
        gameToggler();
      }
    }
  }

  function selectTemplate(templateName) {
    const allItems = document.querySelectorAll('.template__item');
    allItems.forEach((el) => el.classList.remove('template__item--active'));
    
    const activeItem = Array.from(allItems).find(item => item.textContent === templateName);
    if (activeItem) {
      activeItem.classList.add('template__item--active');
    }

    gameOptions.selectedTemplate = templateName;
    gameOptions.isSolution = false;
    isLoaded = false;
    gameToggler();
    changeTemplate(gameDifficult, templateName);
  }

  templates.forEach((templateName) => {
    const item = document.createElement('div');
    item.textContent = templateName;
    item.classList.add('template__item');
 
    if (templateName === selectedTemplate) {
      item.classList.add('template__item--active');
    }

    item.addEventListener('click', () => handleTemplateClick(templateName));
    templateContainer.append(item);
  });

  changeTemplate(gameDifficult, selectedTemplate);
}

function createDifficultPanel() {
  const difficultContainer = document.createElement('div');
  difficultContainer.classList.add('difficult__container');
  leftPanel.append(difficultContainer);

  const easyButton = document.createElement('div');
  easyButton.classList.add('difficult__button', 'difficult__button--active');
  easyButton.textContent = 'Easy';

  const mediumButton = document.createElement('div');
  mediumButton.classList.add('difficult__button');
  mediumButton.textContent = 'Medium';

  const hardButton = document.createElement('div');
  hardButton.classList.add('difficult__button');
  hardButton.textContent = 'Hard';

  const buttons = { easy: easyButton, medium: mediumButton, hard: hardButton };

  function setActiveButton(difficulty) {
    Object.keys(buttons).forEach((key) => {
      buttons[key].classList.remove('difficult__button--active');
    });
    buttons[difficulty].classList.add('difficult__button--active');
  }

  function changeDifficulty(newDifficulty, templates) {
    setActiveButton(newDifficulty);
    gameOptions.difficult = newDifficulty;
    gameOptions.selectedTemplate = templates[0];
    gameOptions.isSolution = false;
    gameToggler();
    createTemplatesPanel();
    changeCellsSize(gameOptions.difficult);
    changeTemplate(gameOptions.difficult, templates[0]);
  }

  function handleDifficultyClick(targetDifficulty, templates) {
    if (
      gameOptions.isStarted === false &&
      gameOptions.difficult !== targetDifficulty
    ) {
      changeDifficulty(targetDifficulty, templates);
    } else if (
      gameOptions.isStarted === true &&
      gameOptions.difficult === targetDifficulty
    ) {
      return;
    } else {
      async function abort() {
        const userDecision = await showWarningPopup(
          'Are you want to change the difficulty? Your progress will be lost.'
        );
        if (userDecision === true) {
          changeDifficulty(targetDifficulty, templates);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          resetTimer();
        }
      }
      abort();
    }
  }

  easyButton.addEventListener('click', () =>
    handleDifficultyClick('easy', easyTemplates)
  );
  mediumButton.addEventListener('click', () =>
    handleDifficultyClick('medium', mediumTemplates)
  );
  hardButton.addEventListener('click', () =>
    handleDifficultyClick('hard', hardTemplates)
  );

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
        `.matrix__row[data-row='${i}'] .cell[data-cell='${j}']`
      );
      if (cell) {
        cell.classList.remove('cell-active', 'cell-cross');
      }
    }
  }
  displayMatrix();
  displayCountCellsLeft(matrixTemplate, gameContainer);
  displayCountCellsTop(matrixTemplate, gameContainer);
}

function showSolutionButton() {
  const solutionButton = document.createElement('div');
  solutionButton.classList.add('button');
  solutionButton.classList.add('button__solution');
  solutionButton.classList.add('button__solution--active');
  solutionButton.textContent = 'Show Solution';

  solutionButton.addEventListener('click', () => {
    if (gameOptions.isSolution === true) {
      return;
    } else {

    if (gameOptions.isStarted === false) {
      const actualTemplate = templatesObject[gameOptions.difficult][gameOptions.selectedTemplate];
      emptyMatrix = actualTemplate.map((row) => [...row]);
      updateMatrixOnDisplay(emptyMatrix);
      matrixContainer.removeEventListener('click', changeEmptyMatrix);
      matrixContainer.removeEventListener('contextmenu', changeEmptyMatrix);
      gameOptions.isSolution = true;
      gameToggler();
    } else {
      async function abort() {
        const userDecision = await showWarningPopup('Are you want to show the solution? Your progress will be lost.');
        if (userDecision === true) {
          const actualTemplate = templatesObject[gameOptions.difficult][gameOptions.selectedTemplate];
          emptyMatrix = actualTemplate.map((row) => [...row]);
          updateMatrixOnDisplay(emptyMatrix);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = true;
          resetTimer();
          gameToggler();
          matrixContainer.removeEventListener('click', changeEmptyMatrix);
          matrixContainer.removeEventListener('contextmenu', changeEmptyMatrix);
        } else {
          return;
        }
      }
      abort()
    }
  }
  });
  
  rightPanel.append(solutionButton);
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
  const timer = document.querySelector('.timer');

  const minutes = Math.floor(timePassed / 60).toString().padStart(2, '0');
  const seconds = (timePassed % 60).toString().padStart(2, '0');
  timer.innerHTML = `${minutes}:${seconds}`;
}
function resetTimer() {
  clearInterval(timerInterval);
  timePassed = 0;
  isPaused = true;
  updateTimerOnPage();
}

function resetGameButton () {
  const resetGameButton = document.createElement('div');
  resetGameButton.classList.add('button');
  resetGameButton.classList.add('button__reset');
  resetGameButton.textContent = 'Reset Game';

  resetGameButton.addEventListener('click', () => {
    if (gameOptions.isStarted === false && gameOptions.isSolution === false) {
      return;
    } else {
      async function abort() {
        const userDecision = await showWarningPopup('Are you want to reset the game? Your progress will be lost.');
        if (userDecision === true) {                
          clearMatrix(emptyMatrix);
          updateMatrixOnDisplay(emptyMatrix);
          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          isLoaded = false;
          resetTimer();
          gameToggler();
          matrixContainer.addEventListener('click', changeEmptyMatrix);
          matrixContainer.addEventListener('contextmenu', changeEmptyMatrix);
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
  const randomGameButton = document.createElement('div');
  randomGameButton.classList.add('button__random');
  randomGameButton.classList.add('button');
  randomGameButton.textContent = 'Random Game';

  randomGameButton.addEventListener('click', () => {
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

      const difficultButtons = document.querySelectorAll('.difficult__button');
      difficultButtons[randomDifficultIndex].classList.add('difficult__button--active');

      const getDifficult = difficultButtons[randomDifficultIndex].textContent.toLowerCase();
      
      gameOptions.difficult = getDifficult;
      gameOptions.selectedTemplate = nameOfTemplate;
      gameOptions.isSolution = false;

      gameToggler();
      createTemplatesPanel(getDifficult, nameOfTemplate);
      updateMatrixOnDisplay(emptyMatrix);
      changeCellsSize();
    } else {
      async function abort() {
        const userDecision = await showWarningPopup('Are you want to choose a random template? Your progress will be lost.');
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

          const difficultButtons = document.querySelectorAll('.difficult__button');
          difficultButtons[randomDifficultIndex].classList.add('difficult__button--active');

          const getDifficult = difficultButtons[randomDifficultIndex].textContent.toLowerCase();

          gameOptions.difficult = getDifficult;
          gameOptions.selectedTemplate = nameOfTemplate;

          gameOptions.isStarted = false;
          gameOptions.inProcess = false;
          gameOptions.isSolution = false;
          gameToggler();
          resetTimer();

          createTemplatesPanel(getDifficult, nameOfTemplate);
          updateMatrixOnDisplay(emptyMatrix);
          changeCellsSize();
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
  const saveGameButton = document.createElement('div');
  saveGameButton.classList.add('button');
  saveGameButton.classList.add('button__save');
  saveGameButton.textContent = 'Save Game';
  saveGameButton.addEventListener('click', function () {
    if (gameOptions.isSolution === true || gameOptions.isStarted === false) {
      return;
    } else {
      localStorage.setItem('gameOptions', JSON.stringify(gameOptions));
      localStorage.setItem('gameGrid', JSON.stringify(emptyMatrix));
      localStorage.setItem('timePassed', timePassed.toString()); 

      const loadGameButton = document.querySelector('.button__load');
      loadGameButton.classList.add('button__load--active');      
    }
  })

  rightPanel.append(saveGameButton);  
}
function loadGameButton () {
  
  const loadGameButton = document.createElement('div');
  loadGameButton.classList.add('button');
  loadGameButton.classList.add('button__load');
  loadGameButton.textContent = 'Load Game';
  loadGameButton.addEventListener('click', function () {
  if (gameOptions.isStarted === false) {    
    const savedGame = localStorage.getItem('gameOptions');
    const savedGrid = localStorage.getItem('gameGrid');
    const savedTime = localStorage.getItem('timePassed');    

    if (savedGame) {
      Object.assign(gameOptions, JSON.parse(savedGame));

      const difficultButtons = document.querySelectorAll('.difficult__button');
      difficultButtons.forEach((button) => {
        if (button.textContent.toLowerCase() === gameOptions.difficult) {
          button.classList.add('difficult__button--active');
        } else {
          button.classList.remove('difficult__button--active');
        }
      });
    
      createTemplatesPanel(gameOptions.difficult, gameOptions.selectedTemplate);
    }
    if (savedGrid) {
      emptyMatrix = JSON.parse(savedGrid);
      updateMatrixOnDisplay(emptyMatrix, true);
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
        const userDecision = await showWarningPopup('Are you want to load a saved game? Your progress will be lost.');
        if (userDecision === true) {
          const savedGame = localStorage.getItem('gameOptions');
          const savedGrid = localStorage.getItem('gameGrid');
          const savedTime = localStorage.getItem('timePassed');

          if (savedGame) {
            Object.assign(gameOptions, JSON.parse(savedGame));
          
            const difficultButtons = document.querySelectorAll('.difficult__button');
            difficultButtons.forEach((button) => {
              if (button.textContent.toLowerCase() === gameOptions.difficult) {
                button.classList.add('difficult__button--active');
              } else {
                button.classList.remove('difficult__button--active');
              }
            });
            createTemplatesPanel(gameOptions.difficult, gameOptions.selectedTemplate);
          }
          if (savedGrid) {
            emptyMatrix = JSON.parse(savedGrid);
            updateMatrixOnDisplay(emptyMatrix, true);
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
  const resetGameButton = document.querySelector('.button__reset');
  const solutionButton = document.querySelector('.button__solution');
  const saveGameButton = document.querySelector('.button__save');

  if (gameOptions.isSolution === true) {
    solutionButton.classList.remove('button__solution--active');
    saveGameButton.classList.remove('button__save--active');
  } else {
    solutionButton.classList.add('button__solution--active')
  }

  if (gameOptions.isStarted === true && gameOptions.inProcess === true && gameOptions.isSolution === true) {      
    resetGameButton.classList.remove('button__reset-active');
  }
  if (isLoaded === true) {
    console.log(true);
    
    startTimer()
    resumeTimer();
    isLoaded = false;
  }
  if (gameOptions.isStarted === true || gameOptions.isSolution === true) {
    resetGameButton.classList.add('button__reset-active');  
  }
  if (gameOptions.isStarted === true && gameOptions.inProcess === false) {
    startTimer();
    
    
    saveGameButton.classList.add('button__save--active');
    gameOptions.inProcess = true;   
  } else if (gameOptions.isStarted === true && gameOptions.inProcess === true) {    
    return;
  } else if (gameOptions.isStarted === false && gameOptions.inProcess === false && gameOptions.isSolution === false) {      
    resetGameButton.classList.remove('button__reset-active');
    saveGameButton.classList.remove('button__save--active');
  }
}

function showResultsButton () {
  const showResultsButton = document.createElement('div');
  showResultsButton.classList.add('show-results__button');
  showResultsButton.textContent = 'Show Results';
  showResultsButton.addEventListener('click', bestResultsPopup)

  topContainer.append(showResultsButton);
}
function toggleSoundButton () {
  const toggleSoundButton = document.createElement('div');
  toggleSoundButton.classList.add('toggle-sound__button');
  toggleSoundButton.classList.add('toggle-sound__button--active');
  toggleSoundButton.textContent = 'Sound Off';
  toggleSoundButton.addEventListener('click', toggleSound);

  topContainer.append(toggleSoundButton);
}  
function toggleThemeButton() {
  const toggleThemeButton = document.createElement('div');
  toggleThemeButton.classList.add('toggle-theme__button');
  toggleThemeButton.addEventListener('click', toggleTheme);
  topContainer.append(toggleThemeButton);
}  

function createVictoryPopup() {
  pauseTimer();
  
  const finalTime = document.querySelector('.timer').textContent;

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup__content');

  const closeButton = document.createElement('div');
  closeButton.classList.add('popup__close-button');
  closeButton.innerHTML = '&times;';

  const resultsTitle = document.createElement('div');
  resultsTitle.classList.add('popup__title');
  resultsTitle.textContent = 'Great!';

  const victoryMessage = document.createElement('p');
  victoryMessage.classList.add('popup__message');
  victoryMessage.textContent = `You have solved the nonogram in ${finalTime} seconds!`;

  const okButton = document.createElement('div');
  okButton.classList.add('popup__ok-button');
  okButton.textContent = 'OK';

  popupContent.append(closeButton, resultsTitle, victoryMessage, okButton);
  popupContainer.append(popupContent);
  document.body.append(popupContainer);

  function closePopup() {
    popupContainer.remove();
    gameOptions.isSolution = true;
    gameToggler();
  }

  closeButton.addEventListener('click', closePopup);
  okButton.addEventListener('click', closePopup);
}

function showWarningPopup(message = 'You sure?') {
  return new Promise((resolve) => {
  playSound(sounds.popup);
  const isGamePaused = (isPaused === true) || (gameOptions.isStarted === false);

  pauseTimer();
  
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup__content');

  const popupMessage = document.createElement('p');
  popupMessage.classList.add('popup__message');
  popupMessage.innerText = message;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('popup__buttons');

  const closeButton = document.createElement('div');
  closeButton.classList.add('popup__close-button');
  closeButton.innerHTML = '&times;';

  const okButton = document.createElement('div');
  okButton.classList.add('popup__ok-button');
  okButton.textContent = 'OK';

  okButton.addEventListener('click', () => {
    closePopup();
    resolve(true);
  });

  const cancelButton = document.createElement('div');
  cancelButton.classList.add('popup__cancel-button');
  cancelButton.textContent = 'Cancel';

  cancelButton.addEventListener('click', () => {
    closePopup();
    resolve(false);
  });
  closeButton.addEventListener('click', () => {
    closePopup();
    resolve(false);
  });


  buttonsContainer.append(okButton, cancelButton);
  popupContent.append(closeButton, popupMessage, buttonsContainer);
  popupContainer.append(popupContent);
  document.body.appendChild(popupContainer);

  function closePopup() {
    popupContainer.remove();
    if (!isGamePaused) {
      resumeTimer();
    }
  }

  });
}

function bestResultsPopup () {
  playSound(sounds.popup);
  const isGamePaused = (isPaused === true) || (gameOptions.isStarted === false);
  pauseTimer();

  const results = JSON.parse(localStorage.getItem('gameResults')) || [];

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup__content');

  const closeButton = document.createElement('div');
  closeButton.classList.add('popup__close-button');
  closeButton.innerHTML = '&times;';

  const resultsTitle = document.createElement('div');
  resultsTitle.classList.add('popup__title');
  resultsTitle.textContent = 'Score Table:';

  const resultsTable = document.createElement('table');
  resultsTable.classList.add('popup__results-table');

  const tableHeader = document.createElement('tr');
  tableHeader.innerHTML = `
    <th>Position</th>
    <th>Layout</th>
    <th>Difficulty</th>
    <th>Time</th>
  `;
  resultsTable.appendChild(tableHeader);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');

    if (results[i]) {
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>${results[i].layout}</td>
        <td>${results[i].difficulty}</td>
        <td>${formatTime(results[i].time)}</td>
      `;
    } else {
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
      `;
    }

    resultsTable.appendChild(row);
  }

  const okButton = document.createElement('div');
  okButton.classList.add('popup__ok-button');
  okButton.textContent = 'OK';

  popupContent.append(closeButton, resultsTitle, resultsTable, okButton);
  popupContainer.append(popupContent);
  document.body.appendChild(popupContainer);

  function closePopup() {
    popupContainer.remove();
    if (!isGamePaused) {
      resumeTimer();
    }
  }

  closeButton.addEventListener('click', closePopup);
  okButton.addEventListener('click', closePopup);

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}

function changeCellsSize() {
  const newSize = CELL_SIZES[gameOptions.difficult];
  document.documentElement.style.setProperty('--cell-size', newSize);
}