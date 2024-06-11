# TypeScript Utility Library and Decorators Project

This repository contains two separate projects that demonstrate the versatility and type safety of TypeScript. The first part is a utility library providing functions for array and object manipulation using generics. The second part showcases the use of class, method, and accessor decorators in TypeScript.

## Table of Contents

- [Setup](#setup)
- [Utility Library Usage](#utility-library-usage)
- [Decorators Project Usage](#decorators-project-usage)
- [Functions](#functions)
  - [Generic Identity Function](#generic-identity-function)
  - [Generic Array Reversal Function](#generic-array-reversal-function)
  - [Generic Object Mapper Function](#generic-object-mapper-function)
  - [Generic Filtering Function](#generic-filtering-function)
- [Decorators](#decorators)
  - [SimpleLogger](#simplelogger)
  - [LogMethod](#logmethod)
  - [MyReadOnly](#myreadonly)
- [Testing](#testing)
- [License](#license)

## Setup

Make sure you have TypeScript installed in your environment.

```bash
npm install -g typescript


Clone this repository to your local machine:
git clone https://github.com/your-username/your-repository.git


Navigate to the project directory:
cd TypeScriptUtilityLibrary


Utility Library Usage
1. Compile the TypeScript files:
tsc

2. Run the compiled JavaScript file:
node utilities.js


**Decorators Project Usage**
Navigate to the DecoratorsProject directory:
cd DecoratorsProject

1. Install dependencies:
npm install

2.Compile the TypeScript code:
npx tsc

3. Run the project:
node index.js


Functions
Generic Identity Function
function identity<T>(arg: T): T
A generic function that takes an argument of type T and returns the same value of type T.

Generic Array Reversal Function
function reverseArray<T>(arr: T[]): T[]
A generic function that takes an array of elements of type T and returns a new array with the elements in reverse order.

Generic Object Mapper Function
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U>
A generic function that takes an object with keys of type K and values of type V, along with a mapping function that converts V to another type U. Returns a new object with the same keys but values of type U.


Generic Filtering Function
function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[]
A generic function that filters elements of an array based on a predicate function. The predicate function takes an element of type T and returns a boolean. Returns a new array with the elements that satisfy the predicate function.


Decorators
SimpleLogger
The SimpleLogger class decorator logs a message when an instance of the class is created.
function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log(`Creating an instance of ${constructor.name}`);
            super(...args);
        }
    };
}


LogMethod
The LogMethod method decorator logs a message when a method is called, including the method name and arguments.
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}


MyReadOnly
The MyReadOnly accessor decorator prevents modification of a property and logs an attempt to modify it.
function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDescriptor = {
        get() {
            return descriptor.get?.call(this);
        },
        set(value: any) {
            console.log(`Attempt to modify read-only property ${propertyKey}`);
        },
        enumerable: true,
        configurable: true
    };

    return originalDescriptor;
}


Testing
To test the utility functions, additional test cases are provided in the utilities.ts file. You can run the test file using Node.js after compiling the TypeScript code.

To test the decorators, you can run the project using:
node index.js


Expected output:
Creating an instance of BaseMyTestClass
Calling method1 with arguments: []
Method1 called with prop1: test
Calling method2 with arguments: []
Method2 called with prop2: 42
read-only value


If you uncomment the line in index.ts that attempts to modify the read-only property, you will see an additional log message:
Attempt to modify read-only property readOnlyProp

License
This project is licensed under the MIT License.

Feel free to customize this README.md file with additional information or formatting to suit your preferences.

 
