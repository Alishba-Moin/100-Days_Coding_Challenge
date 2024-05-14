// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let object = {
    firstName : "Alishba",
    lastName : "Moin",
    fullName : function(){
        return `My name is: ${this.firstName} ${this.lastName}`
    }
}
console.log(object.fullName());