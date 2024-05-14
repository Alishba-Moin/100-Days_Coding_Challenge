// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let usernames : string[] = ["Alishba","Mishal","Zimal","Daniyal","Ahsan"]

let lengthOfWords = usernames.map((usernames) => usernames.length)
console.log(lengthOfWords);