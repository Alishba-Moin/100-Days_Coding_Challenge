// Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function show_magicians(magician:string[]):void{
   let magicians = magician;
   console.log(magician);
}
function make_great(magician:string[]):void {
    for(let i = 0 ; i < magicians.length; i++){
        console.log(`${magicians[i]} The Great. `)
    }
}
show_magicians(magicians)
make_great(magicians)