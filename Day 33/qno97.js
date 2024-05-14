// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function returnsCurrentDate() {
    var currentDate = new Date();
    var day = ("0" + currentDate.getDay()).slice(-2);
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    var year = currentDate.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(returnsCurrentDate());
