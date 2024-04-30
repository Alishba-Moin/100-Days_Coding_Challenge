// Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visit = ["Canada", "Australia", "Japan", "Thailand", "Italy"];
console.log('original order', visit);
console.log('Alphabetic order', __spreadArray([], visit, true).sort());
console.log('original order', visit);
console.log('reverse alphabetic order', __spreadArray([], visit, true).sort().reverse());
console.log('original order', visit);
visit.reverse();
console.log('reverse order', visit);
visit.reverse();
console.log('original order', visit);
visit.sort();
console.log('alphabetic order', visit);
visit.reverse();
console.log('reverse alphabetic order', visit);
