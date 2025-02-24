import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules';

const initSwiper = ({
  containerSelector,
  paginationSelector,
  nextButtonSelector,
  prevButtonSelector,
}) => {
  const slider = new Swiper(containerSelector, {
    modules: [Navigation, Keyboard, Pagination, Autoplay],

    pagination: {
      el: paginationSelector,
      clickable: true,
    },

    navigation: {
      nextEl: nextButtonSelector,
      prevEl: prevButtonSelector,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
      },
    },

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    loop: true,
    initialSlide: 0,
    speed: 3000,
  });
};

export const observeGallerySwiper = (selector, options) => {
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
