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

export { MyReadOnly };


