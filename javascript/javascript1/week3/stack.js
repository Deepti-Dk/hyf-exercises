function gun() {
  fun();
  console.log('Gun');
}

function hun() {
  console.log('Hun');
}

function fun() {
  hun();
  console.log('Fun');
}

console.log(gun());
