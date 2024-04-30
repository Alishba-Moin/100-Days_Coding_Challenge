// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function SwappingVariables() {
    var a = 10;
    var b = 20;
    console.log("Before Swapping:");
    console.log("a =", a);
    console.log("b =", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After Swapping:");
    console.log("a =", a);
    console.log("b =", b);
}
SwappingVariables();
