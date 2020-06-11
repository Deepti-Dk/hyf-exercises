console.log('Welcome to the podcast.js');

const podcasts = [
  {
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/355',
  },
  {
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/356',
  },
  {
    name: 'Breakfast news - Dinner edition',
  },
];

const ul = document.createElement('ul');
const body = document.querySelector('body');

body.appendChild(ul);

for (let i = 0; i < podcasts.length; i++) {
  const li = document.createElement('li');
  const head = document.createElement('h1');
  head.innerHTML = podcasts[i].name;
  li.appendChild(head);
  const img = document.createElement('img');
  if (podcasts[i].imageUrl) {
    //img.src = podcasts[i].imageUrl;
    img.setAttribute('src', podcasts[i].imageUrl);
    li.appendChild(img);
  }
  ul.appendChild(li);
}
