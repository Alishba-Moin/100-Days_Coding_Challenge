// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function MultiplyingDecimals(number1 :number, number2: number): number{
    return Math.round(number1 * number2 * 100) / 100;
}
console.log(MultiplyingDecimals(0.5 , 0.2));
console.log(MultiplyingDecimals(6.24,4.43));
