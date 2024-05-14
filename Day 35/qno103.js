"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
Object.defineProperty(exports, "__esModule", { value: true });
function randomBooleanValue() {
    return Math.random() < 0.5;
}
console.log(randomBooleanValue());
