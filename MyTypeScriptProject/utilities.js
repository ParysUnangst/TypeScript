"use strict";
// Generic identity function
function identity(arg) {
    return arg;
}
// Generic array reversal function
function reverseArray(arr) {
    return arr.slice().reverse();
}
// Generic object mapper function
function mapObject(obj, mapFn) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
// Generic filtering function
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
// Example usage
console.log(identity(1)); // Output: 1
console.log(identity("hello")); // Output: "hello"
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Output: ["c", "b", "a"]
const mappedObj = mapObject({ a: 1, b: 2 }, x => x.toString());
console.log(mappedObj); // Output: { a: "1", b: "2" }
const filteredArr = filterArray([1, 2, 3, 4], x => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
