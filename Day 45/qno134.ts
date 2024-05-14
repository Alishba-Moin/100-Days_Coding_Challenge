// Question 134: Take a JSON string and parse it into a JavaScript object.

let jsonString = '{"name":"Alishba", "age": 18 , "country":"Pakistan"}'

const data : {name: string, age: number, country: string} = JSON.parse(jsonString)

console.log(data);


