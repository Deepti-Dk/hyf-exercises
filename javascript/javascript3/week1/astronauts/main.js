//const fetch = require('node-fetch');----fetch is a browser function so no require with .html

fetch('http://api.open-notify.org/astros.json')
  .then((response) => response.json())
  .then((data) => {
    let nameArray = [];
    for (let i = 0; i < data.number; i++) {
      nameArray[i] = data.people[i].name;
    }
    const h1 = document.createElement('h1');
    h1.innerHTML = `There are ${data.number} astronauts in space, they are: ${nameArray}`;
    document.body.appendChild(h1);
  });
