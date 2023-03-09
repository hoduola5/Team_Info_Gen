// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager {
  officeNumber;

  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.title;
  }
}

module.exports = Manager;
