// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
function CreateUserProfile(name, age) {
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
}
var userProfile = CreateUserProfile("Alishba", 18);
userProfile.displayInfo();
