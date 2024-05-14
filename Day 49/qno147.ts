// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(
    callback:(error : Error | null, data?: any)=> void){
        const success = Math.random() < 0.5;
       if(success) {
        const responseData = "Data fetched successfully!"
        callback(null, responseData)
       }else{ 
        const error = new Error("Failed to fetch data.")
        callback(error)
       }
}
fetchData((error, data) => {
    if (error) {
        console.error("Error occurred:", error.message);
    } else {
        console.log("Data:", data);
    }
});
