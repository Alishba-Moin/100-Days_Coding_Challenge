"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
let students = new Map();
students.set(1, "Alishba");
students.set(2, "Mishal");
students.set(3, "Zimal");
students.forEach((name, id) => {
    console.log(`Student IDs: ${id}   Name: ${name}`);
});
