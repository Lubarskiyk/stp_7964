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
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
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

  const slides = document.querySelectorAll('.benefits__slide');

  let activeSlide = null;

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      if (activeSlide && activeSlide !== slide) {
        activeSlide.classList.remove('flipped');
      }

      if (slide.classList.contains('flipped')) {
        slide.classList.remove('flipped');
        activeSlide = null;
        slider.autoplay.start();
      } else {
        slide.classList.add('flipped');
        activeSlide = slide;
        slider.autoplay.stop();
      }
    });
  });

  slider.on('slideChangeTransitionStart', () => {
    document
      .querySelectorAll('.benefits__slide.swiper-slide.flipped')
      .forEach(slide => {
        slide.classList.remove('flipped');
      });
    activeSlide = null;
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

export const observeBenefitsSwiper = (selector, options) => {
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
