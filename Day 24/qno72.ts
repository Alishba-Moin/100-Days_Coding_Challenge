// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let BlockScope : string = "alishba";
    const block : string = "Alishbaa";
    console.log(BlockScope);
    console.log(block);
}
{
    //  console.log(BlockScope); they are not accessable outside the block.
}
{
    //  console.log(block); they are also not accessable outside the block.
}