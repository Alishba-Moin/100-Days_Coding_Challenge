// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let programmerSkills = {

    languages: ["Typescript" , "Python" , "Javascript"],
     tools: ["Git", "Docker", "Jupyter Notebook"],
    softwareFrameworks: ["Angular", "React", "Spring"],
}
let { languages, tools , softwareFrameworks } = programmerSkills;

console.log(`"language:"${languages[0]}`)
console.log(`"Tool:"${tools[0]}`)
console.log(`"Software Framework:"${softwareFrameworks[1]}`);

