// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function myHobbies(...Hobbies : string[]) {
    
    for (let i = 0; i <Hobbies.length; i++) {
        console.log(`"I enjoy ${Hobbies[i]}"`);
    }
}
myHobbies("Coding","Painting","Reading");