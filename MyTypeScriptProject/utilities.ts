/**
 * Generic identity function.
 * @param arg - The value of type T.
 * @returns The same value of type T.
 */
function identity<T>(arg: T): T {
    return arg;
}

// Test case for identity function
console.log(identity<number>(1)); // Output: 1
console.log(identity<string>("hello")); // Output: "hello"

/**
 * Generic array reversal function.
 * @param arr - The array of elements of type T.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

// Test case for reverseArray function
console.log(reverseArray<number>([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Output: ["c", "b", "a"]

/**
 * Generic object mapper function.
 * @param obj - The object with keys of type K and values of type V.
 * @param mapFn - The mapping function that converts values of type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U> {
    const result = {} as Record<K, U>;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}

// Test case for mapObject function
const mappedObj = mapObject({ a: 1, b: 2 }, x => x.toString());
console.log(mappedObj); // Output: { a: "1", b: "2" }

/**
 * Generic filtering function.
 * @param arr - The array of elements of type T.
 * @param predicate - The predicate function that takes an element of type T and returns a boolean.
 * @returns A new array with the elements that satisfy the predicate function.
 */
function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
    return arr.filter(predicate);
}

// Test case for filterArray function
const filteredArr = filterArray<number>([1, 2, 3, 4], x => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4]

// Additional test cases

// Additional test cases for identity function
console.log(identity<boolean>(true)); // Output: true
console.log(identity<object>({ key: "value" })); // Output: { key: "value" }

// Additional test cases for reverseArray function
console.log(reverseArray<boolean>([true, false, true])); // Output: [true, false, true]
console.log(reverseArray<object>([{ key: "value1" }, { key: "value2" }])); // Output: [{ key: "value2" }, { key: "value1" }]

// Additional test cases for mapObject function
const mapObj = mapObject({ x: 10, y: 20 }, x => x * 2);
console.log(mapObj); // Output: { x: 20, y: 40 }

const mapObjToString = mapObject({ a: 1, b: 2, c: 3 }, x => `Number: ${x}`);
console.log(mapObjToString); // Output: { a: "Number: 1", b: "Number: 2", c: "Number: 3" }

// Additional test cases for filterArray function
const filterArr = filterArray<string>(["apple", "banana", "cherry"], x => x.startsWith("b"));
console.log(filterArr); // Output: ["banana"]


const filterArrObjects = filterArray<{ id: number }>([{ id: 1 }, { id: 2 }, { id: 3 }], x => x.id !== 2);
console.log(filterArrObjects); // Output: [{ id: 1 }, { id: 3 }]

