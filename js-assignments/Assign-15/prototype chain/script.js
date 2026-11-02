
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    console.log("Name:", this.name);
};

// Faculty constructor
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department:", this.department);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
    console.log("Subject:", this.subject);
};

// Creating Professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Accessing all methods
professor1.introduce();
professor1.showDepartment();
professor1.teach();

console.log(professor1 instanceof Professor);
console.log(professor1 instanceof Faculty);
console.log(professor1 instanceof Person);
