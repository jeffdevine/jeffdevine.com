document.addEventListener('submit', (event) => {
  document.querySelector('#contact-form').style.display = 'none';

  event.preventDefault();

  const form = event.target;

  const data = new FormData(form);

  fetch(form.action, { method: form.method, body: data });

  document.querySelector('#thank-you').style.display = 'block';
});

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');

  if (document.documentElement.classList.contains('dark') === true) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

const toggleMenu = () => {
  document.querySelector('#nav-menu').classList.toggle('hidden');
};

window.addEventListener("load", (event) => {
  document.querySelector('#mobile-nav-menu-open').addEventListener('click', toggleMenu);
  document.querySelector('#mobile-nav-menu-close').removeEventListener('click', toggleMenu);
  document.querySelector('#mobile-nav-menu-close').addEventListener('click', toggleMenu);
});

window.addEventListener("load", (event) => {
  document.querySelector("#dark-mode-toggle").addEventListener("click", toggleDarkMode);
  document.querySelector("#dark-mode-toggle-mobile").addEventListener("click", toggleDarkMode);

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
