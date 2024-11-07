// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;
// Function to sum an array of numbers
const sumArray = (array: number[]): number => {
    return array.reduce((acc: number, curr: number) => acc + curr, 0);
}
// call the function and log the result
console.log(sumArray([1, 2, 3, 4, 5]));