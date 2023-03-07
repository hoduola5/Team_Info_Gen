// TODO: Write code to define and export the Employee class
// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");

class Employee {
  name;
  id;
  email;

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };

  getEmail = () => {
    this.email = email;
  };

  getRole = () => {
    return Employee;
  };
}

const newEmploy = new Employee();
