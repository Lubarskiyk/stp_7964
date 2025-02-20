export const initBurgerMenu = () => {
  const burgerBtns = document.querySelectorAll('.burger__btn');
  const menu = document.querySelector('.burger__wrapper');
  const menuItems = document.querySelectorAll('.burger__item');
  const menuBtn = document.querySelector('.burger__open');
  const overlay = document.querySelector('.overlay');

  const toggleMenu = () => {
    menu.classList.toggle('showMenu');
    menuBtn.classList.toggle('is-hidden');
    overlay.classList.toggle('is-visible');
    document.body.classList.toggle('no-scroll');
  };

  burgerBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  menuItems.forEach(item => {
    item.addEventListener('click', toggleMenu);
  });

  overlay.addEventListener('click', toggleMenu);
};
