const app = {
  toTop: document.querySelector('.to-top'),
  darkModeSwitch: document.querySelector('.switch__input'),

  init: () => {
    app.toTop.addEventListener('click', app.topFunction);
    app.darkModeSwitch.addEventListener('change', app.toggleDarkMode);
    window.onscroll = () => { app.scrollFunction(); };
  },

  scrollFunction: () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      app.toTop.classList.add('show');
    } else {
      app.toTop.classList.remove('show');
    }
  },

  topFunction: () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },

  toggleDarkMode: () => {
    const { body } = document;
    body.classList.toggle('dark-mode');
    document.querySelector('.np-logo-st0').classList.toggle('np-logo-dark-mode');
    const paths1 = document.querySelectorAll('.np-logo-st1');
    paths1.forEach((path) => path.classList.toggle('np-logo-dark-mode'));
  },
};

document.addEventListener('DOMContentLoaded', app.init());
