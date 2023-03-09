// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern {
  school;

  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
  getSchool(school) {
    return this.school;
  }
  getRole() {
    return Intern.name;
  }
}

module.exports = Intern;
