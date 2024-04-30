// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
interface obj{
    make: string, model: string, year: number
}
let laptops = [
    {
        make: "HP",
        model: "EliteBook Folio",
        year: 2021
    },
    {
        make: "Apple",
        model: "MacBook Pro",
        year: 2021
    },
    {
        make: "Dell",
        model: "Spectre x360",
        year: 2020
    }
]
let [firstlaptop , Secondlaptop] = laptops
console.log("First Laptop:",firstlaptop);
console.log("Second Laptop:",Secondlaptop);

