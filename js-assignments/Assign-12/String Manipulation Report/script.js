
// Q2: String Manipulation Report

// Store product name with extra spaces
let productName = "  wireless headphones PRO  ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Replace pro with pro edition
cleanedName = cleanedName.replace("pro", "pro edition");

// Capitalize the first letter of every word
let formattedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Display cleaned product title and its length
console.log("----- Product Report -----");
console.log("Product Name: " + formattedName);
console.log("Title Length: " + formattedName.length);
