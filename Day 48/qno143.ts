// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
function delayHello(delay:number): Promise<string> {

    const messages = ["Hello,World!", "Greetings!", "Welcome."]
    const randomMessages = Math.floor(Math.random() * messages.length)
    const isSuccess = Math.random() < 0.5; 

        return new Promise((resolve , reject) => {

  setTimeout(() => {
    if (isSuccess) {
      resolve(messages[randomMessages]); // Resolve with a random message
    } else {
      reject("Failed to generate message!"); // Reject with failure message
    }
}, delay);
 });
};
delayHello(2000)
.then((message) =>{
    console.log(`Resolved: ${message}`);
})
.catch((error) =>{
    console.log(`Rejected: ${error}`);
})
