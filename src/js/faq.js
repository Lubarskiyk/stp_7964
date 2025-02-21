import Accordion from 'accordion-js';
// import "accordion-js/dist/accordion.min.css";
export function faqAcordion() {
  const accordions = Array.from(
    document.querySelectorAll('.accordion-container')
  );
  new Accordion(accordions, {
    duration: 300,
    showMultiple: true,
  });
}
