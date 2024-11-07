// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// Sample Output:
// Alice;

// define the type of person 
type Person ={
    name:string,
    age:number
}

// Function to get the property value of an object
const getProperty = <T extends Person, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}



const person:Person ={
    name: "BOB",
    age: 30
}
// call the function to get the property value of an object
console.log(getProperty(person, "name"));
