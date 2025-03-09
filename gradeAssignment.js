// Name: Manuel Federico D. Tudayan
// Activity: Perf2: Conditional Statements and Loops
// Data Structures and Algorithms

// IF ELSE IF ACTIVITY:

// Ask for the user's score and converts it to a number.
let score = Number(prompt("Enter your score: "));

// If-Else Statement
// Checks if score provided is above or equal to 90, displays "Your grade is: Excellent." if true.
if (score >= 90) {
  console.log("Your grade is: Excellent.");
  // Checks if score provided is between 80 and 89, displays "Your grade is: Good." if true.
} else if (score >= 80 && score <= 89) {
  console.log("Your grade is: Good.");
  // Checks if score provided is between 70 and 79, displays "Your grade is: Fair." if true.
} else if (score >= 70 && score <= 79) {
  console.log("Your grade is: Fair.");
  // Checks if score provided is below 70, displays "Your grade Needs Improvement." if true.
} else if (score < 70) {
  console.log("Your grade Needs Improvement.");
  // If user inputs an invalid input, then display an error message.
} else {
  console.log("Invalid input, please try again.");
}
