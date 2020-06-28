const buttons = document.querySelectorAll('button');
let count = 0;

const handleclick = () => {
  console.log(count);
  count++;
};
buttons.forEach((button) => {
  button.addEventListener('click', handleclick);
});
