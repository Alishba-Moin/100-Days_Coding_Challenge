// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

const mixTypes :(string|number|boolean)[] = ["mountains" , 2 , "rivers" , false , "oceans" , 6];

const stringList = mixTypes.filter((item) => typeof item === "string");

console.log(stringList);