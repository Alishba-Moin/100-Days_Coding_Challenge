// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
interface Obj {
    make: string,
    model: string,
    year: number,
}
let laptop = {
    make: "HP",
    model: "lexar SSD",
    year: 2021,
    describe() {
        console.log(`"This is a ${this.year} ${this.make} ${this.model} laptop".`);
    }
};
laptop.describe();