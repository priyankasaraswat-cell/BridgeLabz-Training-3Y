
// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method using prototype
Car.prototype.getDetails = function () {
    console.log("Car Brand: " + this.brand);
    console.log("Car Model: " + this.model);
};

// Create two car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

// Call prototype method
car1.getDetails();
car2.getDetails();
