// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function square_declaration(number) {
    return number * number;
}
var square_expressions = function (number) {
    return number * number;
};
console.log(square_declaration(4));
console.log(square_expressions(4));
