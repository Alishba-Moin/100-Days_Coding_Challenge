// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(length, width) {
    return length * width;
}
var calculateArea_Arrow = function (length, width) { return length * width; };
console.log(calculateArea(4, 6));
