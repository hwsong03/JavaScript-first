// String comparison function
function compareStrings(string1, string2) {
  if (string1 === string2) {
    alert("The strings are equal.");
  } else {
    alert("The strings are not equal.");
  }
}

// Test cases
compareStrings("hello", "hello"); // should alert that they are equal
compareStrings("hello", "world"); // should alert that they are not equal
