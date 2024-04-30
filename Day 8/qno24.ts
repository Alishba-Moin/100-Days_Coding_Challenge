// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider 
// range of comparisons.

// • Tests for equality and inequality with strings
let string1 : string = "alishba";
let string2 : string = "alishba";
console.log("equality", string1 === string2)
console.log("inequality",string1 !== string2)
// • Tests using the lower case function
let LowerCase : string = "HeLLoWoRLd";
console.log("lower case function",LowerCase.toLowerCase() === "helloworld")
// • Numerical tests involving equality and inequality, greater than and less than,
//  greater than or equal to, and less than or equal to
let num1 : number = 15;
let num2 : number = 5 ;
console.log ("equality",num1 === num2)
console.log ("inequality",num1 !== num2)
console.log ("greater than",num1 > num2)
console.log ("less than",num1 < num2)
console.log ("greater than or equal to",num1 >= num2)
console.log ("less than or equal to",num1 <= num2)
// • Tests using "and" and "or" operators
const a : number = 60;
console.log ("and",a > 50 && a < 20)
console.log ("or",a < 50 || a > 20)
// • Test whether an item is in a array
let name = ["alishba","mishal","zimal"] 
console.log(name.includes("zimal"))
// • Test whether an item is not in a array
let name1 = ["alishba","mishal","zimal"] 
console.log(name1.includes("ahsan"))
