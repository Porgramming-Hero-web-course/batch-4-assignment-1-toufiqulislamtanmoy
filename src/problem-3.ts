// Problem 3:
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;


// Function to count the number of times a word appears in a sentence
const countWordOccurrences = (sentence:string, word:string):number =>{
     return sentence?.toLowerCase()?.split(word)?.length - 1;
}

// call the function and log the result
console.log(countWordOccurrences("I love typescript, Typescript is a superset of javascript", "typescript"));

