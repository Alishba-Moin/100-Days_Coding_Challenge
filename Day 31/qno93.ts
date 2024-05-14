// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceFruits(array :string[]) {
    const index = array.indexOf("Banana");
        if (index !== -1) {
        array[index] = "Mango";
    }
    return array;
}

const fruits = ["Apple", "Banana", "Strawberry", "Grapes"];
replaceFruits(fruits);
console.log(fruits); 
