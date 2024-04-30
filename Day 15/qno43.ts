// Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician: string[] = ["Harry Houdini", "David Copperfield"," David Blaine", "Uri Geller"]

function make_great(magician:string[]): string[] {
   return magician.map(magician => magician +" " + "The Great")
} 
function show_magicians(magician:string[]): void {
    console.log(magician.join("\n"))
}
let originalMagician: string[] = [...magician]
let GreatMagician: string[] = make_great ([...magician])

show_magicians(originalMagician)
console.log("\n")
show_magicians(GreatMagician)

