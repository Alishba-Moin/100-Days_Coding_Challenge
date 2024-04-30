// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var Guest = ["Ahsan", "Daniyal", "Alishba", "Zimal"];
var cannotAttend = "Daniyal";
console.log("".concat(cannotAttend, ",can't make it to dinner"));
var newGuest = "Mishal";
Guest[Guest.indexOf(cannotAttend)] = newGuest;
for (var i = 0; i < Guest.length; i++) {
    console.log("Dear ".concat(Guest[i], ", i invited you for a dinner."));
}
