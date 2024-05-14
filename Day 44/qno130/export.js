"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
