// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var original_numbers = [2, 4, 6, 8];
var Double_numbers = [];
for (var i = 0; i < original_numbers.length; i++) {
    var Double_number = original_numbers[i] * 2;
    Double_numbers.push(Double_number);
}
console.log("original numbers:", original_numbers);
console.log("double numbers:", Double_numbers);
