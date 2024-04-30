// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guest: string[] = ["Ahsan","Daniyal","Alishba","Zimal"]

let cannotAttend : string = "Mishal"
let newGuest = "Ibad"
guest[guest.indexOf(cannotAttend)] = newGuest
guest.unshift("Tooba")
guest.splice(guest.length/2 , 0 , "Irsa")
guest.push("Arbab")

console.log(guest)
console.log(guest.length + " " + "guest invited to a dinner")
