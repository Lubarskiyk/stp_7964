export function toggleText() {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.js_toggle_btn');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const textContainer = button.parentElement;
        const textContent = textContainer.querySelector('.js_text_content');
        const ellipsis = textContainer.querySelector('.js_ellipsis');

        if (textContent.classList.contains('expanded')) {
          textContent.classList.remove('expanded');
          textContent.style.maxHeight = '100px';
          button.textContent = 'more';
          ellipsis.style.opacity = 1;
        } else {
          textContent.classList.add('expanded');
          textContent.style.maxHeight = textContent.scrollHeight + 'px';
          button.textContent = 'close';
          ellipsis.style.opacity = 0;
        }
      });
    });
  });
}
