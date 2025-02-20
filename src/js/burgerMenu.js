export const initBurgerMenu = () => {
  const burgerBtns = document.querySelectorAll('.burger__btn');
  const menu = document.querySelector('.burger__wrapper');
  const menuItems = document.querySelectorAll('.burger__item');
  const menuBtn = document.querySelector('.burger__open');

  const toggleMenu = () => {
    if (menu.classList.contains('showMenu')) {
      menu.classList.remove('showMenu');
      menuBtn.classList.remove('is-hidden');
    } else {
      menu.classList.add('showMenu');
      menuBtn.classList.add('is-hidden');
    }
  };

  burgerBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  menuItems.forEach(item => {
    item.addEventListener('click', toggleMenu);
  });
};
