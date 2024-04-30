// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.S
function square_declaration(number: number):number{
    return number * number;
}
const square_expressions = function(number:number):number{
    return number * number;
}
console.log(square_declaration(4));
console.log(square_expressions(4));