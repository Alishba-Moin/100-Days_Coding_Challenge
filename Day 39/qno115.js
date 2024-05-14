// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function WeekOfTheDays(days) {
    switch (days) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
        default:
            console.log("Invalid day number");
            break;
    }
}
WeekOfTheDays(4);
