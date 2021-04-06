const app = {
  toTop: document.querySelector('.to-top'),
  darkModeSwitch: document.querySelector('.switch__input'),
  isDarkModeOn: null,

  init: () => {
    // button to scroll top
    app.toTop.addEventListener('click', app.topFunction);
    window.onscroll = () => { app.scrollFunction(); };
    // toggle dark mode
    app.darkModeSwitch.addEventListener('change', app.toggleDarkMode);
    app.isDarkModeOn = localStorage.getItem('isDarkModeOn');
    app.setTheme();
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
    // toggling classes
    const { body } = document;
    body.classList.toggle('dark-mode');
    document.querySelector('.np-logo-st0').classList.toggle('np-logo-dark-mode');
    const paths1 = document.querySelectorAll('.np-logo-st1');
    paths1.forEach((path) => path.classList.toggle('np-logo-dark-mode'));
    // localStorage
    let isDarkModeOn = 'false';
    if (document.body.classList.contains('dark-mode')) {
      isDarkModeOn = 'true';
    }
    localStorage.setItem('isDarkModeOn', isDarkModeOn);
  },

  setTheme: () => {
    if (app.isDarkModeOn === 'true') {
      const { body } = document;
      body.classList.add('dark-mode');
      document.querySelector('.np-logo-st0').classList.add('np-logo-dark-mode');
      const paths1 = document.querySelectorAll('.np-logo-st1');
      paths1.forEach((path) => path.classList.add('np-logo-dark-mode'));
      document.querySelector('.switch__input').checked = true;
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init());
