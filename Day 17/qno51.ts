// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function calculateArea(length:number , width: number): number {
    return length * width;
}
let calculateArea_Arrow = (length:number , width:number): number => length * width;

console.log(calculateArea(4,6));