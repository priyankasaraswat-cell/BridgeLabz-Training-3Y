
// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);

// Restore constructor reference
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

// Create student object
const student1 = new Student("Priyanka", "CSE");

// Call both methods
student1.showName();
student1.showBranch();

// Check prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
