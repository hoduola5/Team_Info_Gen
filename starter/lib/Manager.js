// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager {
  officeNumber;

  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getOffice(officeNumber) {
    return officeNumber;
  }

  getRole(name) {
    // const newManager = Manager;
    return Manager.name;
  }
}

module.exports = Manager;
