// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

async function fetchData(){
const data = await fetchSomething();
console.log(data);
}
function fetchSomething() {
    return Promise.resolve("Mock data"); 
  }
fetchData()
console.log("The 'await' keyword allows asynchronous code to be written in a more linear, readable way.");
