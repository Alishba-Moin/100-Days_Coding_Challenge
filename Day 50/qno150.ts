// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// synchronous 
console.log("before synchronous operation!")

for(let i=0 ; i< 1e9; i++){
    console.log("after synchronous operation!")
}

// asynchronous
console.log("before asynchronous operation!")

setTimeout(()=>{
console.log("asynchronous operation completed!")
},1000);

console.log("after asynchronous operation setup!");
