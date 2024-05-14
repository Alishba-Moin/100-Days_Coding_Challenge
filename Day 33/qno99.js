// Question 99: Generate a date object representing your next birthday and log it to the console.
function nextBirthdayDate(month, day) {
    var todayDate = new Date();
    var year = todayDate.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < todayDate) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = nextBirthdayDate(11, 18);
console.log("My next birthday on: " + nextBirthday.toLocaleDateString());
