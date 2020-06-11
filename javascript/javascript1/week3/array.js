let student_obj = [
  { name: 'Elias', age: 33, country: 'Eriteria' },
  { name: 'Deepti', age: 21, country: 'India' },
  { name: 'Nuha', age: 21, country: 'Iraq' },
  { name: 'Ahmad', age: 26, country: 'Syria' },
  { name: 'Jean', age: 30, country: 'France' },
];

let keys = ['name', 'age', 'country'];
/* for (let i = 0; i < student.length; i++) {
    for (let j = 0; j < keys.length; j++) {
    console.log(student[i][keys[j]]);
    }
    }*/

let i, j;
//"Elias" : 33 (eriteria)
for (i = 0; i < student_obj.length; i++) {
  for (j = 0; j < keys.length; j++) {
    if (keys[j] == 'name') {
      console.log('"' + student_obj[i][keys[j]] + '"');
      // + ':' + '(' + student_obj[[i][keys[j]] + ')';
    }
    if (keys[j] == 'age') {
      console.log(student_obj[i][keys[j]]);
      // + ':' + '(' + student_obj[[i][keys[j]] + ')';
    }
    if (keys[j] == 'country') {
      console.log(student_obj[i][keys[j]]);
      // + ':' + '(' + student_obj[[i][keys[j]] + ')';
    }
  }
}
