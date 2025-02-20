export function cookieBaner() {
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie_banner');
    const acceptBtn = document.getElementById('accept_cookies');
    const declineBtn = document.getElementById('decline_cookies');
    console.log(banner);
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
      banner.classList.remove('hide');
    }

    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.add('hide');
    });

    declineBtn.addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'false');
      banner.classList.add('hide');
    });
  });
}
