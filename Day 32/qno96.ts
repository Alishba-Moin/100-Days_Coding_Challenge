// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function sumAllNumbers(sum: number[]): number {
    return sum.reduce((total , currentValue) => total + currentValue, 0 )  
}
let sum : number[] = [12, 8 , 10 ,5 , 2, 15]
console.log(sumAllNumbers(sum));