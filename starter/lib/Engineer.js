// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer {
  github;
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getGithub(github) {
    return this.github;
  }
  getRole() {
    // const newEngineer = Engineer;
    return Engineer.name;
  }
}

module.exports = Engineer;
