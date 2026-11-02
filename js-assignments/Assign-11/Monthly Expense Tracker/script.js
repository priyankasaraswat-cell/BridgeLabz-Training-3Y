
// Q3: Monthly Expense Tracker

// Create an array of monthly expenses for 5 categories
let expenses = [5000, 2000, 8000, 3000, 1500];

// Calculate total expenses
let totalExpense = 0;

for (let expense of expenses) {
    totalExpense += expense;
}

// Calculate average expense
let averageExpense = totalExpense / expenses.length;

// Add 10% tax to total expense
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

// Display expense report
console.log("----- Monthly Expense Report -----");

console.log("Total Expense: Rs." + totalExpense.toFixed(2));
console.log("Average Expense: Rs." + averageExpense.toFixed(2));
console.log("Tax (10%): Rs." + tax.toFixed(2));
console.log("Final Amount after Tax: Rs." + finalAmount.toFixed(2));
