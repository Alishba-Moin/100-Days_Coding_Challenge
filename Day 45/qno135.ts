// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const person = {
    name: "Alishba",
    age: 18,
    country: "Pakistan"
}
const JsonString = JSON.stringify(person, null, 2)
console.log(JsonString);