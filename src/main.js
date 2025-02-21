import { toggleText } from './js/aboutOpenCloseText.js';
import { initBurgerMenu } from './js/burgerMenu.js';
import { cookieBaner } from './js/cookieBaner.js';
import { faqAcordion } from './js/faq.js';
import { initHeaderScroll } from './js/headerScroll.js';
import { observeSwiper } from './js/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});
initHeaderScroll();
cookieBaner();
toggleText();
faqAcordion();

observeSwiper('.benefits', {
  containerSelector: '.swiper',
  paginationSelector: '.benefits__pagination',
  nextButtonSelector: '.benefits__button-next',
  prevButtonSelector: '.benefits__button-prev',
});
