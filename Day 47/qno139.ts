// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// reserved word = typeof(Used to determine the type of a variable.)
let x = 25;
console.log(typeof x);

// reserved word = break(Used to exit a loop prematurely.)
for(let i = 0; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
}
// reserved word = return( Used to exit a function and optionally return a value)
function add(x:number , y:number) {
    return x + y;
}
console.log(add(5,2));