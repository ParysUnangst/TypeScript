import { SimpleLogger } from './decoratorsSimpleLogger';
import { LogMethod } from './decoratorsLogMethod';
import { MyReadOnly } from './decoratorsMyReadOnly';

class BaseMyTestClass {
    prop1: string;
    prop2: number;
    private _readOnlyProp: string = 'read-only value';

    constructor(prop1: string, prop2: number) {
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
const DecoratedMyTestClass = SimpleLogger(BaseMyTestClass);

// Apply method decorators manually
const method1Descriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'method1');
if (method1Descriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'method1', LogMethod(DecoratedMyTestClass.prototype, 'method1', method1Descriptor));
}

const method2Descriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'method2');
if (method2Descriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'method2', LogMethod(DecoratedMyTestClass.prototype, 'method2', method2Descriptor));
}

// Apply accessor decorator manually
const readOnlyPropDescriptor = Object.getOwnPropertyDescriptor(BaseMyTestClass.prototype, 'readOnlyProp');
if (readOnlyPropDescriptor) {
    Object.defineProperty(DecoratedMyTestClass.prototype, 'readOnlyProp', MyReadOnly(DecoratedMyTestClass.prototype, 'readOnlyProp', readOnlyPropDescriptor));
}

export default DecoratedMyTestClass;


