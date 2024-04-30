// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
type shape = circle | rectangle;

type circle = {
    kind: "circle",
    radius: number,
}
type rectangle = {
    kind: "rectangle",
    width: number,
    height: number
}
let circle: shape = {
    kind: "circle",
    radius: 5
}
let rectangle: shape = {
    kind: "rectangle",
    width: 6,
    height: 4
}
console.log(circle);
console.log(rectangle);

