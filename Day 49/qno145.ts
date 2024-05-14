// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function executeCallback(
    callback: (argument1: number, argument2: number) =>  void, 
    argument1 : number,
    argument2 : number
): void {
   callback (argument1 , argument2);
}
function add (a : number, b: number): void {
    console.log(`Sum: ${a + b}`)
}
executeCallback(add,5 , 6);
