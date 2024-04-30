// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.


function MixedTypes(number1 : number, stringNumber : string): number {
    return number1 + Number(stringNumber);
}
console.log(MixedTypes(25 , "5"));
console.log(MixedTypes(6, "4"));