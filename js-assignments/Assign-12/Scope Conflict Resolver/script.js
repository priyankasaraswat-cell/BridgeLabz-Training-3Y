
// Q1: Scope Conflict Resolver

// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary() {

    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;
    }

    // Print total salary
    console.log("Total Salary: Rs." + salary);
    console.log("Global Bonus: Rs." + bonus);
}

// Call function
calculateSalary();

// Change local condition by calling function again
function calculateSalaryAgain() {

    let salary = 40000;
    let isPermanent = false;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Salary when not permanent: Rs." + salary);
}

calculateSalaryAgain();

// Global bonus remains unchanged
console.log("Bonus outside function: Rs." + bonus);
