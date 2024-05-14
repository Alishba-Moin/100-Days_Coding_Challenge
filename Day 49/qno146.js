// Question 146: Show an example of a callback function used to filter an array of numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filterArray = numbers.filter(function (number) { return number > 5; });
console.log(filterArray);
