/**Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello');
  }, 4000);
});
promise.then((message) => {
  console.log(message);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error');
  }, 4000);
});
promise1.catch((message) => {
  console.log(message);
});

/***with async 

async function checkError() {
  const res = await promise;
  console.log(res);
}
checkError();
/************ */
