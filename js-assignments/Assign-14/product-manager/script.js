
"use strict";

// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Shoes", 2500, "Fashion"),
    new Product(3, "Book", 500, "Education"),
    new Product(4, "Mobile", 20000, "Electronics")
];

// Apply 10% discount to first product
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products with price greater than 1000:");
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});
