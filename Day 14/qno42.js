// Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magician) {
    var magicians = magician;
    console.log(magician);
}
function make_great(magician) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("".concat(magicians[i], " The Great. "));
    }
}
show_magicians(magicians);
make_great(magicians);
