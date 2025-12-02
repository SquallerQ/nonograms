export function createTimer() {
  const timer = document.createElement('div');
  timer.classList.add('timer');
  timer.innerHTML = '00:00';
  return timer;
}
