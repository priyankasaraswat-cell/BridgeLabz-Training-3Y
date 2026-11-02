
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student's own method
Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

// Create student object
const student1 = new Student("Priyanka", "Computer Science");

student1.showName();
student1.showBranch();

console.log(student1 instanceof Person);
