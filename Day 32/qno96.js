// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sumAllNumbers(sum) {
    return sum.reduce(function (total, currentValue) { return total + currentValue; }, 0);
}
var sum = [12, 8, 10, 5, 2, 15];
console.log(sumAllNumbers(sum));
