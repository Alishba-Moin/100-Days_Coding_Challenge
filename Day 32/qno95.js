// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greaterThanTen(num) {
    return num.filter(function (Number) { return Number > 10; });
}
var num = [5, 10, 15, 20, 25, 30];
console.log(greaterThanTen(num));
