const button = document.querySelector('#btn');
const body = document.querySelector('body');
body.style.background = 'white';
body.style.color = 'black';

button.addEventListener('click', function onclick() {
  if (body.style.background === 'white') {
    body.style.background = 'black';
    body.style.color = 'white';
  } else {
    body.style.background = 'white';
    body.style.color = 'black';
  }
  button.textContent = 'I got clicked!';
});
