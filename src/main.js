import { toggleText } from './js/aboutOpenCloseText.js';
import { initBurgerMenu } from './js/burgerMenu.js';
import { cookieBaner } from './js/cookieBaner.js';
import { initHeaderScroll } from './js/headerScroll.js';
import './js/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});
initHeaderScroll();
cookieBaner();
toggleText();
