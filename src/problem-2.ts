// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]

// Function to remove duplicates from an array of numbers
const removeDuplicates = (array: number[]):number[] => {
     return ([...new Set(array)])
}

// call the function and log the result
console.log(removeDuplicates([1,9,9, 1, 2, 2, 3, 4, 4, 5]));

