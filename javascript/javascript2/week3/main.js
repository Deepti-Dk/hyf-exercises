const buttonCounter1 = document.getElementById('counter1');
const buttonCounter2 = document.getElementById('counter2');
const delayCounter = document.getElementById('delayCounter');
const body = document.querySelector('body');

let counter = 0;
let prev = 0;

function displaycount1() {
  alert('counter 1: ' + counter);
  prev = counter;
  counter++;
}
function displaycount2() {
  alert('counter 2: ' + prev);
}

function displaycountDelay() {
  setTimeout(function () {
    alert('This text was delayed by 3 seconds');
  }, 3000);
}
buttonCounter1.addEventListener('click', displaycount1);
buttonCounter2.addEventListener('click', displaycount2);
delayCounter.addEventListener('click', displaycountDelay);

window.onload = function () {
  alert('DOM fully loaded and parsed');
};
document.onmousemove = function (e) {
  alert('Current mouse position is x: ' + e.pageX + ', y: ' + e.pageY);
};
