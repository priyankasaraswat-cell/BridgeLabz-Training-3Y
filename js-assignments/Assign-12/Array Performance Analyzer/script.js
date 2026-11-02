
// Q4: Array Performance Analyzer

// Generate 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to create a formatted score list
let formattedScores = scores.map(score => "Score: " + score);

// Find highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate total and average using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Find students who passed (marks >= 50)
let passedStudents = scores.filter(score => score >= 50);

// Display complete summary
console.log("----- Array Performance Report -----");
console.log("All Scores:", formattedScores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Passed Students:", passedStudents.length);
console.log("Passed Scores:", passedStudents);
