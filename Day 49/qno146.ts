// Question 146: Show an example of a callback function used to filter an array of numbers.

const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

const filterArray : number[] = numbers.filter(number => number > 5 ) 
console.log(filterArray);