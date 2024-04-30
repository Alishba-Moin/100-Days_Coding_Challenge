var Student = {
    name: "Alishba",
    age: 18,
    courses: ["Artificial Intelligence", "Metaverse", "Web 3.0"]
};
console.log(Student);
// Define a class for representing student information
var Students = /** @class */ (function () {
    // Constructor
    function Students(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
    // Method to display student information
    Students.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Classes: ").concat(this.classes.join(', ')));
    };
    return Students;
}());
// Usage: Create an example student
var exampleStudent = new Students("John", 15, ["Math", "Science", "History"]);
// Display student information
exampleStudent.displayInfo();
