const DEVELOPER = 1;
const TESTER = 2;

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => { 
    switch (type) {
      case DEVELOPER:
        return new Developer(name);
        break;
      case TESTER:
        return new Tester(name);
        break;
    }
  };
}

// function to print
function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}.`);
}

// create new instance of the employee factory
const employeeFactory = new EmployeeFactory();

// our db
const employees = [];

employees.push(employeeFactory.create("Khairul", DEVELOPER));
employees.push(employeeFactory.create("Sofia", TESTER));

employees.forEach(emp => { 
  say.call(emp);
});