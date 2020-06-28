/**Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random
Get a random dog image and display it in the browser
Get a new image every 2 sec.
Get the list of all breeds from https://dog.ceo/api/breeds/list/all
Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
Display the name of the breed under the image */

/*setInterval(() => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const image = document.querySelector('img');
      console.log(data);
      image.src = data.message;
      document.body.appendChild(image);
    });
}, 2000);*/

const ul = document.querySelector('ul');
fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    //console.log(key);
    breeds.forEach((breed) => {
      const li = document.createElement('li');
      li.innerHTML = breed;
      li.appendChild(document.createTextNode('text'));
      ul.appendChild(li);
    });
  });

fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
  .then((response) => response.json())
  .then((img) => {
    console.log(img);
    const image = document.querySelector('img');
    image.src = img.message;
    document.body.appendChild(image);
  });
