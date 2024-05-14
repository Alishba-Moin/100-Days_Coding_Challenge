// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizePerson(age) {
    if (age < 13) {
        return "child";
    }
    else if (age >= 13 && age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
var personAgeGroup = categorizePerson(16);
console.log("The person is cataegorized as a " + personAgeGroup);
