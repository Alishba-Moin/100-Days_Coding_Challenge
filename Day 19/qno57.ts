// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

let grades : number[] = [95, 87 ,75 ,70 , 90];
let totals : number = grades.reduce((total , grade) => total + grade , 0);
let average : number = totals / grades.length;

console.log("Average Grade:", average);