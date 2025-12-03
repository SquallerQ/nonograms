export function createMainStructure() {
  const body = document.querySelector('body');

  const topContainer = document.createElement('div');
  topContainer.classList.add('top__container');
  body.append(topContainer);

  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner__container');
  body.append(innerContainer);

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main__container');
  innerContainer.append(mainContainer);

  const leftPanel = document.createElement('div');
  leftPanel.classList.add('left__container');
  mainContainer.append(leftPanel);

  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game__container');
  mainContainer.append(gameContainer);

  const matrixContainer = document.createElement('div');
  matrixContainer.classList.add('matrix__container');
  gameContainer.append(matrixContainer);

  matrixContainer.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  const rightPanel = document.createElement('div');
  rightPanel.classList.add('right__container');
  mainContainer.append(rightPanel);

  return { topContainer, leftPanel, gameContainer, matrixContainer, rightPanel };
}

export function createTimer() {
  const timer = document.createElement('div');
  timer.classList.add('timer');
  timer.innerHTML = '00:00';
  return timer;
}
