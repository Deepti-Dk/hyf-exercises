function getCircleArea(radius) {
  const pi = 3.14;
  let area = pi * radius * radius;
  console.log('inside function');
  return area;
}

/*let areaReturned = getCircleArea(20);
area = getCircleArea(30);
console.log(areaReturned);*/
console.log(getCircleArea(12));
