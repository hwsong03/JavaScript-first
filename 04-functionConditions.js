// Conditional function example
function analyzeNumber(number) {
  if (number > 10) {
    console.log("The number is greater than 10.");
  } else if (number < 10) {
    console.log("The number is less than 10.");
  } else {
    console.log("The number is exactly 10.");
  }
}

// Test cases
analyzeNumber(12); // should log that the number is greater than 10
analyzeNumber(8);  // should log that the number is less than 10
analyzeNumber(10); // should log that the number is exactly 10
