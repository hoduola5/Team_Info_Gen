// TODO: Write code to define and export the Employee class
class Employee {
  name;
  id;
  email;
  title;

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Employee";
  }

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };

  getEmail = (email) => {
    return this.email;
  };

  getRole = (title) => {
    return this.title;
  };
}

module.exports = Employee;
