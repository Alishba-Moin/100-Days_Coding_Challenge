"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checksCanada(countries) {
    if (countries.has("canada")) {
        console.log(`The capital of Canada is ${countries.get("canada")}`);
    }
    else {
        console.log("Canada is not found in the map.");
    }
}
let countries = new Map();
countries.set("Japan", "Tokyo");
countries.set("Farance", "Paris");
countries.set("Pakistan", "Islamabad");
checksCanada(countries);
