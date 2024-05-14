// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeftUntilNewYear() {
    var todayDate = new Date();
    var newYearDate = new Date(todayDate.getFullYear() + 1, 0, 1);
    var millisecondsInDays = 1000 * 60 * 60 * 24;
    var daysLeft = Math.ceil((newYearDate.getTime() - todayDate.getTime()) / millisecondsInDays);
    return daysLeft;
}
console.log("There are " + daysLeftUntilNewYear() + " days left until New Year.");
