/** getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random***/

function getLoggedInUsers() {
  let randomNumber = Boolean(Math.round(Math.random()));
  console.log(randomNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber) {
        resolve(['benna', 'magdy', 'carolina']);
      } else {
        reject('go home');
      }
    }, 5000);
  });
}
getLoggedInUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });
