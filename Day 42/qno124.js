// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
var obj = {
    name: "Alishba",
    getName: function () {
        return this.name;
    }
};
console.log(obj.getName());
