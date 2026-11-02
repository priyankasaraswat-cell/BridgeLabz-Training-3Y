
// Q8: Employee Salary Projection

// Declare current salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;

// Create an array to store yearly salary details
let salaryReport = [];

// Calculate salary for the next 5 years
for (let year = 1; year <= 5; year++) {

    // Calculate yearly increment
    let incrementAmount = currentSalary * incrementRate / 100;

    // Update salary
    currentSalary += incrementAmount;

    // Store yearly salary details
    salaryReport.push({
        Year: year,
        Salary: currentSalary.toFixed(2),
        Increment: incrementAmount.toFixed(2)
    });
}

// Display salary projection in table format
console.log("----- 5 Year Salary Projection -----");
console.table(salaryReport);
