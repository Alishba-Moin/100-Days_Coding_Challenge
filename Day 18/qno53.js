// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmerSkills = {
    languages: ["Typescript", "Python", "Javascript"],
    tools: ["Git", "Docker", "Jupyter Notebook"],
    softwareFrameworks: ["Angular", "React", "Spring"],
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, softwareFrameworks = programmerSkills.softwareFrameworks;
console.log("\"language:\"".concat(languages[0]));
console.log("\"Tool:\"".concat(tools[0]));
console.log("\"Software Framework:\"".concat(softwareFrameworks[1]));
