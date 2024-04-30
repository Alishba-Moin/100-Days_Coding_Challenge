// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let Guest = ["Ahsan", "Daniyal", "Alishba", "Zimal"];

let cannotAttend : string = "Daniyal"
console.log(`${cannotAttend},can't make it to dinner`)

let newGuest : string = "Mishal" 
Guest[Guest.indexOf(cannotAttend)] = newGuest

for(let i =0; i < Guest.length; i ++){
    console.log(`Dear ${Guest[i]}, i invited you for a dinner.`)
}