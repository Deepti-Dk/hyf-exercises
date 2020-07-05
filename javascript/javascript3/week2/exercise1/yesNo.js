/**fetch yes or no from this api: https://yesno.wtf/api. log out the answer */

async function logYesNo() {
  try {
    const response = await fetch('https://yesno.wtf/api');
    /*const ansJson = response.json();
    ansJson.then(function (data) {
      console.log(data.answer);
    });*/
    const ansJSON = await response.json();
    console.log(ansJSON.answer);
  } catch {
    console.log('error');
  }
}
logYesNo();
