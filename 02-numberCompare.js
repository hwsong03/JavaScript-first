// Number comparison function
function compareNumbers(number1, number2) {
  if (number1 > number2) {
    alert("The first number is greater than the second number.");
  } else if (number1 < number2) {
    alert("The first number is less than the second number.");
  } else {
    alert("The numbers are equal.");
  }
}

// Test cases
compareNumbers(10, 5);  // should alert that the first number is greater
compareNumbers(3, 5);   // should alert that the first number is less
compareNumbers(7, 7);   // should alert that the numbers are equal
