// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
// Hints: Use keyof
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

// Function to get the property value of an object if name property does not exist return false otherwise return the value of name property
const getProperty = <T extends Person, K extends keyof T>(obj: T, key: K): T[K] | boolean => {
    if(key in obj){
        return obj[key];
    }
    return false;
}



const person:Person ={
    name: "BOB",
    age: 30
}
// call the function to get the property value of an object
console.log(getProperty(person, "name"));
