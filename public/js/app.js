document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.querySelector('.to-top');

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  }

  function topFunction() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  window.onscroll = () => { scrollFunction(); };

  toTop.addEventListener('click', topFunction);

  function toggleDarkMode() {
    const { body } = document;
    body.classList.toggle('dark-mode');
  }

  const darkModeSwitch = document.querySelector('.switch__input');

  darkModeSwitch.addEventListener('change', toggleDarkMode);
});
