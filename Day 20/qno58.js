// Q58 - Write a simple program that can take lots of scores and find their average.
function calculateAverage(scores) {
    if (scores.length === 0) {
        console.log("No score provided");
        return 0;
    }
    var sum = scores.reduce(function (total, grade) { return total + grade; }, 0);
    var average = sum / scores.length;
    return average;
}
var inputNumber = [95, 88, 75, 90, 70];
var averageNumber = calculateAverage(inputNumber);
console.log(averageNumber);
