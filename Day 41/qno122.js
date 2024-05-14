"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;
while (count >= 1) {
    if (count == 5)
        break;
    console.log(count);
    count--;
}
