class Course {
  constructor(title, grade) {
    this.title = title;
    this.grade = grade;
  }
}
class Student {
  constructor(name, mobile, email, courses) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.courses = courses;
  }
}

const student1 = new Student(
  'deepti',
  1001,
  'dee@gmail.com',
  new Course('HTML', 3)
);
console.log(student1);
