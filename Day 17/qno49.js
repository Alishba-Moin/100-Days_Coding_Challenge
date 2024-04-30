// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function myHobbies() {
    var Hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Hobbies[_i] = arguments[_i];
    }
    for (var i = 0; i < Hobbies.length; i++) {
        console.log("\"I enjoy ".concat(Hobbies[i], "\""));
    }
}
myHobbies("Coding", "Painting", "Reading");
