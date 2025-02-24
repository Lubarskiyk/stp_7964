import Accordion from 'accordion-js';

export function faqAcordion() {
  const accordions = Array.from(
    document.querySelectorAll('.accordion-container')
  );
  new Accordion(accordions, {
    duration: 300,
    showMultiple: true,
  });
}
