// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeftUntilNewYear(): number{
    const todayDate: Date = new Date()
    const newYearDate : Date = new Date(todayDate.getFullYear() +1 , 0 ,1)
    const millisecondsInDays: number = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((newYearDate.getTime() - todayDate.getTime())/millisecondsInDays);
     
    return daysLeft;
}
console.log("There are " + daysLeftUntilNewYear() + " days left until New Year.");


