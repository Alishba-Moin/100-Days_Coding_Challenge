// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function returnsCurrentDate(): string {
    let currentDate : Date = new Date();
    let day : string = ("0"+ currentDate.getDay()).slice(-2);
    let month : string = ("0"+ (currentDate.getMonth() +1)).slice(-2);
    let year : number = currentDate.getFullYear()

    return `${day}-${month}-${year}`;
}
console.log(returnsCurrentDate());