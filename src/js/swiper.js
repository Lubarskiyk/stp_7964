import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules';

const initSwiper = () => {
  const swiperBenefits = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Pagination, Autoplay],

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 16,
        centeredSlides: true,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    // centeredSlides: false,
    initialSlide: 0,
    speed: 1000,
  });

  swiperBenefits.on('slideChange', () => {
    const isEnd = swiperBenefits.isEnd;
    const isBeginning = swiperBenefits.isBeginning;

    if (isEnd) {
      swiperBenefits.autoplay.stop();
      swiperBenefits.params.autoplay.reverseDirection = true;
      swiperBenefits.autoplay.start();
    } else if (isBeginning) {
      swiperBenefits.autoplay.stop();
      swiperBenefits.params.autoplay.reverseDirection = false;
      swiperBenefits.autoplay.start();
    }
  });
};

const swiperSection = document.querySelector('.benefits');
const benefitsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initSwiper();

        benefitsObserver.disconnect();
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

benefitsObserver.observe(swiperSection);
