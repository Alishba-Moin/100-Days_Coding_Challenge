// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

let original_numbers : number[] = [2,4,6,8]
let Double_numbers : number[] = []

for(let i=0; i < original_numbers.length ; i ++){
   const Double_number = original_numbers[i] * 2;
   Double_numbers.push(Double_number)
}
console.log("original numbers:",original_numbers);
console.log("double numbers:",Double_numbers);