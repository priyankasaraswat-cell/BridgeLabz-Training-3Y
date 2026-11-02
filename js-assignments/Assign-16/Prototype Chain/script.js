
// First constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function () {
    console.log("Person Name: " + this.name);
};

// Second constructor
function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function () {
    console.log("Subject: " + this.subject);
};

// Third constructor
function Professor(name, subject, designation) {
    Faculty.call(this, name, subject);
    this.designation = designation;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function () {
    console.log("Designation: " + this.designation);
};

// Create professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "HOD"
);

// Access all methods
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();

// Check inheritance
console.log(professor1 instanceof Person);
console.log(professor1 instanceof Faculty);
console.log(professor1 instanceof Professor);
