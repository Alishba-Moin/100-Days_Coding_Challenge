// Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Cris Angel","Harry Houdini","Copperfield","David Blanie"];

function show_magicians(magician : string[]) {
    for(let i =0 ; i  < magician.length; i ++){
    console.log(magicians[i]);
}
}
show_magicians(magicians);