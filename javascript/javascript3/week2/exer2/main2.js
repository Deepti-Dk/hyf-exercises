async function checkError() {
  try {
    const response = await fetch('https://knajskdskj.jasdk');
    const ansJSON = await response.json();
    console.log(ansJSON.answer);
  } catch {
    console.log('ERROR!!!');
  }
}
checkError();
