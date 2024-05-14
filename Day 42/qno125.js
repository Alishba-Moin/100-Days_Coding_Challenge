// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var object = {
    firstName: "Alishba",
    lastName: "Moin",
    fullName: function () {
        return "My name is: ".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log(object.fullName());
