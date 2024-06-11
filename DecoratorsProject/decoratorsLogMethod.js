"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMethod = void 0;
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
