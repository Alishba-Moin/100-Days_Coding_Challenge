// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let LaptopPrice1 : number[] = [1200 , 1100 , 1500];
let LaptopPrice2 : number[] = [1000 , 1300 , 1600];
let combinelaptops = [...LaptopPrice1 , ...LaptopPrice2].sort((a , b) => a-b);

console.log(combinelaptops);