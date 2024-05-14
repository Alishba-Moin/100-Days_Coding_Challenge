"use strict";
// Question 144: Explain the use of the Promise.all() method with an example.
Object.defineProperty(exports, "__esModule", { value: true });
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(50);
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(`All Promised Resolved Successfully: ${values[0]}, ${values[1]}, ${values[2]}`);
});
