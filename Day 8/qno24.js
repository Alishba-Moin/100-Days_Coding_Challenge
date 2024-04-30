// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// • Tests for equality and inequality with strings
var string1 = "alishba";
var string2 = "alishba";
console.log("equality", string1 === string2);
console.log("inequality", string1 !== string2);
// • Tests using the lower case function
var LowerCase = "HeLLoWoRLd";
console.log("lower case function", LowerCase.toLowerCase() === "helloworld");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 15;
var num2 = 5;
console.log("equality", num1 === num2);
console.log("inequality", num1 !== num2);
console.log("greater than", num1 > num2);
console.log("less than", num1 < num2);
console.log("greater than or equal to", num1 >= num2);
console.log("less than or equal to", num1 <= num2);
// • Tests using "and" and "or" operators
var a = 60;
console.log("and", a > 50 && a < 20);
console.log("or", a < 50 || a > 20);
// • Test whether an item is in a array
var name = ["alishba", "mishal", "zimal"];
console.log(name.includes("zimal"));
// • Test whether an item is not in a array
var name1 = ["alishba", "mishal", "zimal"];
console.log(name1.includes("ahsan"));
export {};
