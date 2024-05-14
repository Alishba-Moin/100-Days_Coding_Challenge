// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    var success = Math.random() < 0.5;
    if (success) {
        var responseData = "Data fetched successfully!";
        callback(null, responseData);
    }
    else {
        var error = new Error("Failed to fetch data.");
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error("Error occurred:", error.message);
    }
    else {
        console.log("Data:", data);
    }
});
