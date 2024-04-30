// Q32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
var current_users = ["Alexa", "Jack", "James", "Mexwell", "Mendel"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["John", "Alexa", "Robert", "Mendel", "Jack"];
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " you need to enter a newusername."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
