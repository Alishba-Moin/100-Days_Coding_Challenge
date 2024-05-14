// Question 99: Generate a date object representing your next birthday and log it to the console.
function nextBirthdayDate(month : number , day: number): Date {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let birthday = new Date(year , month - 1, day)

    if( birthday < todayDate){
        birthday.setFullYear(year + 1)
    }
    return birthday;
}    
let nextBirthday: Date = nextBirthdayDate(11 ,18)
console.log("My next birthday on: "+ nextBirthday.toLocaleDateString());
