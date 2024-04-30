var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Car = {
    make: "ferrari",
    model: "488 GTB",
    year: 2021
};
var updateCar = __assign(__assign({}, Car), { color: "black" });
updateCar.year = 2022;
console.log(updateCar);
// Starting with our car object
var carr = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
// Adding a new property 'color' and updating 'year'
carr.colore = "blue"; // Adds a new property 'color'
carr.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(carr); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
