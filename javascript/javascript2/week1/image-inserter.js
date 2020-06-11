console.log('Hello, ready to add images');

function imageInserter(imageURL, elementToAppendImageTo, img) {
  /*const img = document.createElement('img');*/
  img.setAttribute('src', imageURL);
  elementToAppendImageTo.appendChild(img);
}
const img = document.createElement('img');
imageInserter(
  'https://picsum.photos/536/354',
  document.querySelector('body'),
  img
);

const btn = document.querySelector('#btn');
//ssssvar randomNum = Math.floor(Math.random() * 10);
btn.addEventListener('click', function onclick() {
  btn.innerHTML = 'I got clicked';
  imageInserter(
    'https://picsum.photos/536/355',
    document.querySelector('body'),
    img
  );
});
