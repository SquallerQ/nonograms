export function initBurgerMenu() {
  const burger = document.createElement('div');
  burger.classList.add('burger-menu');
  burger.textContent = '☰';
  document.body.appendChild(burger);

  const leftContainer = document.querySelector('.left__container');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  function toggleMenu() {
    leftContainer.classList.toggle('left__container--active');
    overlay.classList.toggle('overlay--active');
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
}
