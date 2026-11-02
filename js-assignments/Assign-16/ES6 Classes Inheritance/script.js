
// Q9: Inheritance using ES6 classes

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Child class inherits Person
class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls parent constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Create Student object
let student1 = new Student("Priyanka", "CSE");

// Access parent and child methods
student1.showName();
student1.showBranch();
