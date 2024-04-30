// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixTypes = ["mountains", 2, "rivers", false, "oceans", 6];
var stringList = mixTypes.filter(function (item) { return typeof item === "string"; });
console.log(stringList);
