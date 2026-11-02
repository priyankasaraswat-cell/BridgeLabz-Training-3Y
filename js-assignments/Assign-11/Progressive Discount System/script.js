
// Q6: Progressive Discount System

// Declare total purchase amount
let totalAmount = 12000;

// Declare discount percentage
let discountPercentage;

// Apply discount based on purchase amount
if (totalAmount >= 10000) {
    discountPercentage = 25;
}
else if (totalAmount >= 5000) {
    discountPercentage = 15;
}
else if (totalAmount >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

// Calculate discount amount
let discountAmount = totalAmount * discountPercentage / 100;

// Calculate final price
let finalPrice = totalAmount - discountAmount;

// Round values using Math.round()
console.log("----- Shopping Discount Bill -----");

console.log("Original Total: Rs." + Math.round(totalAmount));
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discount Amount: Rs." + Math.round(discountAmount));
console.log("Final Price: Rs." + Math.round(finalPrice));
