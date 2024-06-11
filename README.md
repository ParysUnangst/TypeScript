# TypeScript Utility Library

This is a TypeScript utility library that provides functions for array and object manipulation, demonstrating the versatility and type safety of generics.

## Setup

Make sure you have TypeScript installed in your environment.

```bash
npm install -g typescript


1. Usage
Clone this repository to your local machine:
git clone https://github.com/your-username/your-repository.git

2. Navigate to the project directory:
cd TypeScriptUtilityLibrary

3. Compile the TypeScript files:
tsc

4. Run the compiled JavaScript file:
node utilities.js


Functions
1. Generic Identity Function
function identity<T>(arg: T): T
A generic function that takes an argument of type T and returns the same value of type T.

2. Generic Array Reversal Function
function reverseArray<T>(arr: T[]): T[]
A generic function that takes an array of elements of type T and returns a new array with the elements in reverse order.

3. Generic Object Mapper Function
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U>
A generic function that takes an object with keys of type K and values of type V, along with a mapping function that converts V to another type U. Returns a new object with the same keys but values of type U.

4. Generic Filtering Function
function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[]
A generic function that filters elements of an array based on a predicate function. The predicate function takes an element of type T and returns a boolean. Returns a new array with the elements that satisfy the predicate function.

Testing
Additional test cases are provided in the utilities.ts file to validate the functionality of each function. You can run the test file using Node.js after compiling the TypeScript code.


Feel free to customize this README.md file with additional information or formatting to suit your preferences.

 
