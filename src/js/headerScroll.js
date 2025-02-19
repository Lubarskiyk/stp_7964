export const initHeaderScroll = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
  });
};
