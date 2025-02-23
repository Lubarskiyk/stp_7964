import AOS from 'aos';
export function animate() {
  AOS.init({
    once: false,
    mirror: false,
    easing: 'ease-out-cubic',
    offset: 100,
    duration: 500,
    anchorPlacement: 'top-bottom',
  });
}
