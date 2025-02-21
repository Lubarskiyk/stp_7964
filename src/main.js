import { toggleText } from './js/aboutOpenCloseText.js';
import { initBurgerMenu } from './js/burgerMenu.js';
import { cookieBaner } from './js/cookieBaner.js';
import { faqAcordion } from './js/faq.js';
import { initHeaderScroll } from './js/headerScroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});
initHeaderScroll();
cookieBaner();
toggleText();
faqAcordion();
