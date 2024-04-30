// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var More_guest = ["Mishal", "Tooba", "Daniyal", "Ibad"];
console.log("Hello Guyz, i found a bigger dinner table.");
// Add guest in begining
More_guest.unshift("Irsa");
console.log(More_guest);
// Add guest in middle
More_guest.splice(More_guest.length / 2, 0, "Ahsan");
console.log(More_guest);
// Add guest in last
More_guest.push("Arbab");
console.log(More_guest);
for (var i = 0; i < More_guest.length; i++) {
    console.log("Dear ".concat(More_guest[i], ", i invited you for a dinner!"));
}
