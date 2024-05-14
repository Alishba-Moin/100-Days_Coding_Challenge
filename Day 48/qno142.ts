// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

function delayHello() : Promise<string> {
    return new Promise((resolve) =>{
        setTimeout(() => {
        resolve("Hello,World!")
    }, 2000);
    })
}
delayHello().then((message) => {
    console.log(message);
})