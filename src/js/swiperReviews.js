import Swiper from 'swiper';
import { Keyboard, Autoplay } from 'swiper/modules';

const initSwiper = ({ containerSelector }) => {
  const slider = new Swiper(containerSelector, {
    modules: [Keyboard, Autoplay],

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,
      },
    },

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    loop: true,
    initialSlide: 0,
    speed: 3000,
  });
};

export const observeReviewsSwiper = (selector, options) => {
  const swiperSection = document.querySelector(selector);
  if (!swiperSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initSwiper(options);
          observer.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );
  observer.observe(swiperSection);
};
