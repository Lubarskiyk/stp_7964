export const initHeaderScroll = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    if (!header) {
      console.error('Header element not found');
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
  });
};
