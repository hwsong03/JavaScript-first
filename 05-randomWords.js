// Random words function
function createRandomSentence() {
  const words = ["apple", "banana", "cherry", "date", "elderberry"];
  const randomIndex = Math.floor(Math.random() * words.length);
  console.log("The random fruit is: " + words[randomIndex]);
}

// Test
createRandomSentence(); // should log a sentence with a random fruit
