// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function PresenceText(String: string): boolean{
    return String.includes("Javascript")
}
let inputString : string = ("I Love coding in Javascript");
console.log(PresenceText(inputString));