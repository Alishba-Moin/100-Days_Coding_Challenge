// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function expression(value : number): void{
    switch (value) {
        case 1:
            console.log("The Value is 1")
            break;
        case 2:
            console.log("The Value is 2")
            break;
        case 3:
                console.log("The Value is 3")
             break;
        case 4:
                console.log("The Value is 4")
            break; 
        case 5:
            console.log("The Value is 5")
            break;       
        default:
            console.log("None of the cases match.")
            break;
    }
}
expression(3);
expression(18);