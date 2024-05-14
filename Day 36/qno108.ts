// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function compareTwoString(sting1: string , sting2 :string): boolean {
    return sting1.toLowerCase() === sting2.toLocaleLowerCase()
}
console.log(compareTwoString("hello" , "Hello")); 
console.log(compareTwoString("alishba" , "alish"));