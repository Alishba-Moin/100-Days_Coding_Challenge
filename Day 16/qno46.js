var laptop = {
    make: "HP",
    model: "lexar SSD",
    year: 2021,
    describe: function () {
        console.log("\"This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " laptop\"."));
    }
};
laptop.describe();
