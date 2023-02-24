document.addEventListener('submit', (event) => {
  document.querySelector('#contact-form').style.display = 'none';

  event.preventDefault();

  const form = event.target;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  });

  document.querySelector('#thank-you').style.display = 'block';
});
