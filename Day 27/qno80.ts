// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
interface cartype {
    make: string,
    model: string,
    year: number,
}
let Car = {
    make: "ferrari",
    model: "488 GTB",
    year: 2021
}
const updateCar = {
    ...Car,
color : "black",
}
updateCar.year = 2022;
console.log(updateCar);
 
  
