
"use strict";

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method shared by all Car objects
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Creating two objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

// Calling prototype method
car1.getDetails();
car2.getDetails();

// Both objects share the same method
console.log(car1.getDetails === car2.getDetails);
