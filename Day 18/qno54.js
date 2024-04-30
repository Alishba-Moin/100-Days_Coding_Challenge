// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function Flexible_object(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var user_choices = Flexible_object("theme", "light");
console.log(user_choices);
