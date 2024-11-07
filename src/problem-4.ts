// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// Sample Output 2:
// 24;

type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

// Function to calculate the area of a shape
const calculateShapeArea = (shape: Shape): number => { 
    if (shape.shape === "circle") {
        const area:number =   Math.PI * shape.radius * shape.radius;
        return Math.round(area * 100) / 100;
    } else if (shape.shape === "rectangle") {
        const area:number = shape.width * shape.height;
        return Math.round(area * 100) / 100;
    }
    throw new Error("Invalid shape");
}
// call the function to get area of circle
console.log("The area of circle is: ",calculateShapeArea({ shape: "circle", radius: 5 }));

// call the function to get area of rectangle
console.log("The area of rectangle is: ",calculateShapeArea({ shape: "rectangle", width: 9, height: 6 }));
