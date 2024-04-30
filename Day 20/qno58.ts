// Q58 - Write a simple program that can take lots of scores and find their average.
function calculateAverage(scores : number[]) {
    if (scores.length === 0) {
        console.log ("No score provided");
        return 0;
    }
    let sum = scores.reduce((total , grade) => total + grade ,0);
    let average = sum / scores.length;
    return average;
}
let inputNumber: number[] = [95 , 88 , 75 , 90 , 70];
let averageNumber: number = calculateAverage(inputNumber);
console.log(averageNumber);