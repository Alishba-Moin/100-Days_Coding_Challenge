// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var Obj = {
    name: "Alishba",
    outerMethod: function () {
        var _this = this;
        console.log(this.name);
        var innerMethod = function () {
            console.log(_this.name);
        };
        innerMethod();
    }
};
Obj.outerMethod();
// Demonstrates 'this' behavior change in a nested function
var myObject = {
    property: "Value",
    outerMethod: function () {
        //   console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () {
            // console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
