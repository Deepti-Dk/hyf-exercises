console.log('hi');
const dishes = ['pasta', 'lasagne', 'pizza', 'tortillas'];
const mainUl = document.createElement('ul');
document.body.appendChild(mainUl);
for (let i = 0; i < dishes.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = dishes[i];
  mainUl.appendChild(li);
}
