// Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
function roundsToDecimals(num) {
    return Number(num.toFixed(2));
}
var returnNumber = 3.14159;
console.log(roundsToDecimals(returnNumber));
