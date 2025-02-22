import Swiper from 'swiper';
import { Keyboard, Autoplay } from 'swiper/modules';

const initSwiper = ({ containerSelector }) => {
  const slider = new Swiper(containerSelector, {
    modules: [Keyboard, Autoplay],

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

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
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    initialSlide: 0,
    speed: 1000,
  });

  slider.on('slideChange', () => {
    const isEnd = slider.isEnd;
    const isBeginning = slider.isBeginning;

    if (isEnd) {
      slider.autoplay.stop();
      slider.params.autoplay.reverseDirection = true;
      slider.autoplay.start();
    } else if (isBeginning) {
      slider.autoplay.stop();
      slider.params.autoplay.reverseDirection = false;
      slider.autoplay.start();
    }
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
