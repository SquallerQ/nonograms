let isSoundOn = true;
let isDarkTheme = true;

export function playSound(sound) {
  if (isSoundOn) {
    sound.play();
  }
}

export function toggleSound() {
  isSoundOn = !isSoundOn;
  const soundButton = document.querySelector('.toggle-sound__button');

  if (isSoundOn) {
    soundButton.classList.add('toggle-sound__button--active');
    soundButton.textContent = 'Sound Off';
  } else {
    soundButton.classList.remove('toggle-sound__button--active');
    soundButton.textContent = 'Sound On';
  }
}

export function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme', !isDarkTheme);
}

export function getIsSoundOn() {
  return isSoundOn;
}

export function getIsDarkTheme() {
  return isDarkTheme;
}
