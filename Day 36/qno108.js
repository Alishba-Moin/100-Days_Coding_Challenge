// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function compareTwoString(sting1, sting2) {
    return sting1.toLowerCase() === sting2.toLocaleLowerCase();
}
console.log(compareTwoString("hello", "HeLLo"));
console.log(compareTwoString("alishba", "alish"));
