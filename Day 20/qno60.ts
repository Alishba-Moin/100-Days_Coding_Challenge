// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

function CreateUserProfile(name: string, age: number){

    return {
        displayInfo : () =>{
            console.log(`Name: ${name}, Age: ${age}`)
        }
    }
}
let userProfile = CreateUserProfile ("Alishba", 18);
userProfile.displayInfo();