class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
const job1 = new Job(
  '1',
  'junior developer',
  'intern',
  '21/07/2020',
  new Date()
);
const job2 = new Job(
  '2',
  'senior developer',
  'senior',
  '21/07/2020',
  new Date()
);

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

const education1 = new Education(
  '001',
  'masters',
  'schoolA01',
  'Odense',
  '06/07/2020',
  '06/07/2022'
);
const education2 = new Education(
  '002',
  'graduate',
  'schoolA02',
  'Odense',
  '06/07/2020',
  '06/07/2022'
);

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    this.jobs.pop();
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation() {
    this.educations.pop(); //indexOf[1] or
  }

  /*Add a method to the CV class called renderCV(). This method should render out the CV using HTML. Use document.getElementById("<id>") and document.createElement("<element>"), as well as element.appendChild(<element>) to build your HTML using JavaScript.*/

  renderCV() {}
}

const cv1 = new CV('deepti.sharma@abc.com');
//console.log(cv1);
cv1.addJob(job1);
cv1.addJob(job2);
//console.log(cv1);
cv1.addEducation(education1);
cv1.addEducation(education2);
console.log(cv1);
cv1.removeEducation();
console.log(cv1);
