class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + this.lastName;
  }
}

const user1 = new User('deepti', 'sharma');
console.log(user1);
console.log(user1.firstName);

console.log(user1.getFullName());
