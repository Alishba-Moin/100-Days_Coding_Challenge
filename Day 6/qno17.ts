// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guest : string[] = ["alishba","mishal","zimal","daniyal","ahsan"]

console.log("unfortunately, i invited only two guests for dinner")

while(guest.length > 2){
    let removeGuest = guest.pop()
    console.log(`Dear ${removeGuest}, i can't invite you to a dinner.`)
}
guest.forEach(guest =>{
    console.log(`Dear ${guest}, you're still to a dinner.`)
})
guest.splice(0, guest.length);
console.log(guest);