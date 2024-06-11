"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
const myClassInstance = new MyTestClass_1.default('test', 42);
myClassInstance.method1();
myClassInstance.method2();
console.log(myClassInstance.readOnlyProp);
// Uncomment the following line to see the effect of attempting to modify a read-only property
// (myClassInstance as any).readOnlyProp = 'new value';
