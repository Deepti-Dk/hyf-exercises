console.log(0.1 + 0.2 == 0.3);
console.log("i'm a lasagna hog".split('').reverse().join(''));
var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length);

console.log('one');
setTimeout(function () {
  console.log('two');
}, 0);
Promise.resolve().then(function () {
  console.log('three');
});
console.log('four');
