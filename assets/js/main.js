document.addEventListener('submit', (event) => {
  document.querySelector('#contact-form').style.display = 'none';

  event.preventDefault();

  const form = event.target;

  const data = new FormData(form);

  fetch(form.action, { method: form.method, body: data });

  document.querySelector('#thank-you').style.display = 'block';
});

const toggleMenu = () => {
  document.querySelector('#nav-menu').classList.toggle('hidden');
};

window.addEventListener("load", (event) => {
  document.querySelector('#mobile-nav-menu-open').addEventListener('click', toggleMenu);
  document.querySelector('#mobile-nav-menu-close').removeEventListener('click', toggleMenu);
  document.querySelector('#mobile-nav-menu-close').addEventListener('click', toggleMenu);
});
