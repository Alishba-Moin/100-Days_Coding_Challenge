// Question 88: Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.

function StringsToNumbers(Strings: string): number {
    return Number(Strings);
}
let convertsInNumbers: string = "12345";
console.log(StringsToNumbers(convertsInNumbers));