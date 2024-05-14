"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
let object = {
    name: "Alishba",
    age: 18,
    country: "Pakistan"
};
const JSONstring = JSON.stringify(object);
console.log(JSONstring);
