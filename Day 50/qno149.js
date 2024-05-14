// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("start");
setTimeout(function () {
    console.log("Timeout, callback execute.");
}, 0);
console.log("end");
