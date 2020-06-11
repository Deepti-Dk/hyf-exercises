// 0 1 1 2 3 5 8 13 21 34 ... ( sum of previous two numbers! )

function getFibonacciNumber(index) {
  let sum = 0,
    prev = 0,
    next = 1;
  if (index === 1) {
    return 0;
  } else if (index === 2) {
    return 1;
  }
  for (let counter = 3; counter <= index; counter++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }
  return sum;
}

for (let i = 1; i <= 10; i++) {
  console.log(getFibonacciNumber(i) + '\t');
}

/* console.log(
  getFibonacciNumber(1) +
    ' ' +
    getFibonacciNumber(2) +
    ' ' +
    getFibonacciNumber(3) +
    ' ' +
    getFibonacciNumber(4) +
    ' ' +
    getFibonacciNumber(5) +
    ' ' +
    getFibonacciNumber(6) +
    ' ' +
    getFibonacciNumber(7) +
    ' ' +
    getFibonacciNumber(8) +
    ' ' +
    getFibonacciNumber(9) +
    ' ' +
    getFibonacciNumber(10) +
    '...'
);
 */
