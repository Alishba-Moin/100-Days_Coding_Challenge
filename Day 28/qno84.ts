// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replacesJS_with_TS(sentence: string): string {
    return sentence.replace(/JavaScript/g , "TypeScript");
}
console.log(replacesJS_with_TS("I Love JavaScript Because JavaScript Is Awesome!"));