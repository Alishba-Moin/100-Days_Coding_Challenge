// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function dividesNumber(number : number): boolean {
    return number % 2 === 0 && number % 3 === 0
}
console.log(dividesNumber(24));
console.log(dividesNumber(15));
