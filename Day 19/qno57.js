// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [95, 87, 75, 70, 90];
var totals = grades.reduce(function (total, grade) { return total + grade; }, 0);
var average = totals / grades.length;
console.log("Average Grade:", average);
