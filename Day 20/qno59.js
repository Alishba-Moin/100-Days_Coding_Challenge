// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function createAdder(SpecialNumber) {
    return function (number) {
        return number + SpecialNumber;
    };
}
var add5 = createAdder(5);
var add10 = createAdder(10);
console.log(add5(4));
console.log(add10(8));
