import { toggleText } from './js/aboutOpenCloseText.js';
import { animate } from './js/animation.js';
import { initBurgerMenu } from './js/burgerMenu.js';
import { cookieBaner } from './js/cookieBaner.js';
import { faqAcordion } from './js/faq.js';
import { initHeaderScroll } from './js/headerScroll.js';
import { initSectionScroll } from './js/sectionScroll.js';
import { observeBenefitsSwiper } from './js/swiperBenefits.js';
import { observeGallerySwiper } from './js/swiperGallery.js';
import { observeReviewsSwiper } from './js/swiperReviews.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});
animate();
initHeaderScroll();
initSectionScroll();
cookieBaner();
toggleText();
faqAcordion();

observeBenefitsSwiper('.benefits', {
  containerSelector: '.benefits__slider',
  paginationSelector: '.benefits__pagination',
  nextButtonSelector: '.benefits__button-next',
  prevButtonSelector: '.benefits__button-prev',
});

observeGallerySwiper('.gallery', {
  containerSelector: '.gallery__slider',
  paginationSelector: '.gallery__pagination',
  nextButtonSelector: '.gallery__button-next',
  prevButtonSelector: '.gallery__button-prev',
});

observeReviewsSwiper('.reviews', {
  containerSelector: '.reviews__slider',
});
