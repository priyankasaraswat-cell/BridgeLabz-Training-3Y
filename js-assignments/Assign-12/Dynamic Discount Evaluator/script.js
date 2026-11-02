
// Q8: Dynamic Discount Evaluator

// Create an array of product objects
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Initialize cart totals
let originalTotal = 0;
let discountedTotal = 0;

// Calculate individual discounts
for (let product of cart) {

    let discount = 0;

    // Apply discount based on category
    if (product.category === "electronics") {
        discount = 10;
    }
    else if (product.category === "fashion") {
        discount = 5;
    }

    // Calculate discounted product price
    let finalPrice = product.price - (product.price * discount / 100);

    originalTotal += product.price;
    discountedTotal += finalPrice;

    console.log(
        product.item +
        " - Original: Rs." + product.price +
        ", Discount: " + discount +
        "%, Final: Rs." + finalPrice
    );
}

// Calculate total cart value using reduce()
let cartTotal = cart.reduce(
    (total, product) => total + product.price, 0
);

// Apply extra 5% discount if original cart total exceeds 50000
let extraDiscount = 0;

if (cartTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

// Calculate final amount
let finalTotal = discountedTotal - extraDiscount;

// Display final report
console.log("----- Cart Summary -----");
console.log("Original Cart Total: Rs." + originalTotal);
console.log("After Category Discounts: Rs." + discountedTotal);
console.log("Extra Discount: Rs." + extraDiscount);
console.log("Final Cart Total: Rs." + finalTotal);
