document.addEventListener('submit', (event) => {
  document.querySelector('#contact-form').style.display = 'none';

  event.preventDefault();

  const form = event.target;

  const data = new FormData(form);

  fetch(form.action, { method: form.method, body: data });

  document.querySelector('#thank-you').style.display = 'block';
});