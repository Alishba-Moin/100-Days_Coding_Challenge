// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "Alishba",
    age: 18,
    country: "Pakistan"
};
var JsonString = JSON.stringify(person, null, 2);
console.log(JsonString);
