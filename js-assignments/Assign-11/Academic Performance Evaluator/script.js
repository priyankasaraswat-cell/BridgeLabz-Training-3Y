
// Q4: Academic Performance Evaluator

// Store marks of 5 subjects
let marks = [90, 85, 88, 92, 80];

// Calculate total marks
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

// Calculate average and percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let isFailed = marks.some(mark => mark < 35);

// Display student performance
console.log("----- Academic Performance -----");

console.log("Total Marks: " + totalMarks);
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Check promotion status using logical operators
if (isFailed) {
    console.log("Result: Detained");
}
else if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
}
else if (percentage >= 60) {
    console.log("Result: Promoted");
}
else {
    console.log("Result: Not Promoted");
}
