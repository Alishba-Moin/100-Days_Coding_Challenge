// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(val1: boolean, val2: boolean){
    return val1 && val2;
}
console.log(checkBothTrue(true, false));