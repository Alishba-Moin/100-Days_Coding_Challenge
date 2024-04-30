var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 6,
    height: 4
};
console.log(circle);
console.log(rectangle);
// Function to describe a shape
function describeShape(shape) {
    switch (shape.kind) {
        case "circle":
            console.log("Circle - Radius: ".concat(shape.radius));
            break;
        case "rectangle":
            console.log("Rectangle - Width: ".concat(shape.width, ", Height: ").concat(shape.height));
            break;
    }
}
// Example usage
var circlee = { kind: "circle", radius: 5 };
var rectanglee = { kind: "rectangle", width: 4, height: 3 };
describeShape(circlee); // Output: Circle - Radius: 5
describeShape(rectanglee); // Output: Rectangle - Width: 4, Height: 3
