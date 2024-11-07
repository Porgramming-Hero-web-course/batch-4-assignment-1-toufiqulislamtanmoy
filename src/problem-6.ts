// Problem 6
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
// Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }

// define interface profile

interface Profile{
    name:string,
    age:number,
    email:string
}

const updateProfile = (paramObj: Profile, updateObj: Partial<Profile>): Profile => {
   const updateProfile:Profile = {...paramObj, ...updateObj};
   return updateProfile;
  };

// define the profile object
const profile:Profile ={
    name:"BOB",
    age:30,
    email:"bob@gmail.com"
}

// call the function to update the profile
console.log(updateProfile({name:"BOB",age:30,email:"bob@gmail.com"},{age:31}));

