export const gameOptions = {
  difficult: 'easy',
  selectedTemplate: 'smile',
  isStarted: false,
  inProcess: false,
  isSolution: false,
};

export const sounds = {
  leftClick: new Audio('assets/sounds/left-click.mp3'),
  rightClick: new Audio('assets/sounds/right-click.mp3'),
  eraseClick: new Audio('assets/sounds/erase-click.mp3'),
  gameWin: new Audio('assets/sounds/game-win.mp3'),
  popup: new Audio('assets/sounds/popup.mp3'),
};

export const CELL_SIZES = {
  easy: 'min(12vw, 48px)',
  medium: 'min(8vw, 32px)',
  hard: 'min(7vw, 28px)',
};