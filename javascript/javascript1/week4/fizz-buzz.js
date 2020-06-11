/*Fizz buzz
This is a classic programming task.
Create a function that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.
When that works. Make the two number for multiples into parameters. So it can be called like this:
fizzBuzz(4, 12);*/

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

function fizzBuzzInputs(num1, num2) {
  for (let i = 1; i <= 20; i++) {
    if (i % (num1 * num2) === 0) {
      console.log('FizzBuzz');
    } else if (i % num1 === 0) {
      console.log('Fizz');
    } else if (i % num2 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzzInputs(4, 6);
