// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function Divided_reminder(divides1, divides2) {
    var quotient = Math.floor(divides1 / divides2);
    var remainder = divides1 % divides2;
    return {
        quotient: quotient,
        remainder: remainder
    };
}
console.log(Divided_reminder(10, 3));
