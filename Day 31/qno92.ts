// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(array : T[]): T| undefined {
        return array.pop()
    }
const names: string[] = ["alishba","mishal","zimal","daniyal"]
console.log(removeLastElement(names));
