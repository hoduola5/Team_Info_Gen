// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern {
  school;
  title;

  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.title = "Intern";
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.title;
  }
}

module.exports = Intern;
