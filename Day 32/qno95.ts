// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function greaterThanTen(num: number[]): number[] {
    return num.filter(Number => Number > 10)
}
let num : number[] = [5 , 10 , 15 , 20 ,25 , 30]
console.log(greaterThanTen(num));