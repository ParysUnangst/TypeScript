function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

export { LogMethod };


