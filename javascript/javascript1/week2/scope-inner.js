const myConstant = 123;
function getCircleArea(radius) {
  const pi = 3;
  console.log(myConstant + 'and' + pi);
  function getSqaure(num) {
    return num * num;
    console.log('inner' + myConstant);
    console.log('inner' + pi);
  }
  let answer = pi * getSquare(radius);
  return answer;
}
let output = getCircleArea(5);
