"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = void 0;
function MyReadOnly(target, propertyKey, descriptor) {
    const originalDescriptor = {
        get() {
            var _a;
            return (_a = descriptor.get) === null || _a === void 0 ? void 0 : _a.call(this);
        },
        set(value) {
            console.log(`Attempt to modify read-only property ${propertyKey}`);
        },
        enumerable: true,
        configurable: true
    };
    return originalDescriptor;
}
exports.MyReadOnly = MyReadOnly;
