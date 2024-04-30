// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var array = ["Corolla Car", "Ferrari Car", "Honda Motorcycle", "Audi Car"];
for (var i = 0; i < array.length; i++) {
    console.log("\u201CI would like to own a ".concat(array[i], ".\u201D"));
}
