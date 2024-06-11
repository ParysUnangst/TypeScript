"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorsSimpleLogger_1 = require("./decoratorsSimpleLogger");
const decoratorsLogMethod_1 = require("./decoratorsLogMethod");
const decoratorsMyReadOnly_1 = require("./decoratorsMyReadOnly");
class BaseMyTestClass {
    constructor(prop1, prop2) {
        this._readOnlyProp = 'read-only value';
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    method1() {
        console.log(`Method1 called with prop1: ${this.prop1}`);
    }
    method2() {
        console.log(`Method2 called with prop2: ${this.prop2}`);
    }
    get readOnlyProp() {
        return this._readOnlyProp;
    }
}
// Apply class decorator
const DecoratedMyTestClass = (0, decoratorsSimpleLogger_1.SimpleLogger)(BaseMyTestClass);
// Apply method decorators manually
const method1Descriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'method1');
if (method1Descriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'method1', (0, decoratorsLogMethod_1.LogMethod)(DecoratedMyTestClass.prototype, 'method1', method1Descriptor));
}
const method2Descriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'method2');
if (method2Descriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'method2', (0, decoratorsLogMethod_1.LogMethod)(DecoratedMyTestClass.prototype, 'method2', method2Descriptor));
}
// Apply accessor decorator manually
const readOnlyPropDescriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'readOnlyProp');
if (readOnlyPropDescriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'readOnlyProp', (0, decoratorsMyReadOnly_1.MyReadOnly)(DecoratedMyTestClass.prototype, 'readOnlyProp', readOnlyPropDescriptor));
}
exports.default = DecoratedMyTestClass;
