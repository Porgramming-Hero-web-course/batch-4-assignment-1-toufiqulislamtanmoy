{
  // Problem 8
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  // Sample Input:
  // const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));

  // Sample Output:
  // true;

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  // define the function to validate the keys
  const validateKeys = <T extends Person, K extends keyof T>(obj: T, keys: K[]): boolean => {
    return keys.every((key) => key in obj);
  };

  // call the function to validate the keys
  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age", "email"]));
}
