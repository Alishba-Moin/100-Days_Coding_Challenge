// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// First example;
let userName : string = "Alishba";
userName = "Moin ahmed"; // they work beacuse let can reassign
console.log(userName);

// Second example;
const userName2 : string = "Alishba";
// userName2 = "Moin ahmed"; // catch error beacuse const cannot reassign
console.log(userName2);