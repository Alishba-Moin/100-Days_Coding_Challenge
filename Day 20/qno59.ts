// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function createAdder(SpecialNumber:number):(number:number )=> number{
    return function (number:number): number {
        return number + SpecialNumber;
    }
}
const add5 = createAdder(5);
const add10 = createAdder(10);
console.log(add5(4));
console.log(add10(8));