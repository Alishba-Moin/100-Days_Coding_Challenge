"use strict";
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
Object.defineProperty(exports, "__esModule", { value: true });
let string = "Hello Alishba";
let vowel = ["a", "e", "i", "o", "u"];
for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (vowel.includes(char)) {
        console.log(`First Vowel Found: ${char}`);
        break;
    }
}
