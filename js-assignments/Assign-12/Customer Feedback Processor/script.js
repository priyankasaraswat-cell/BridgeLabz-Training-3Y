
// Q7: Customer Feedback Processor

// Store customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback into words
let words = feedback.trim().split(/\s+/);

// Count total words
let wordCount = words.length;

// Check for negative words
let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

// Display feedback report
console.log("----- Customer Feedback Report -----");

console.log("Feedback:", feedback);
console.log("Total Words:", wordCount);

// Check feedback quality
if (!hasBad && !hasPoor) {
    console.log("Result: Positive Feedback");
}
else {
    console.log("Result: Needs Improvement");
}
