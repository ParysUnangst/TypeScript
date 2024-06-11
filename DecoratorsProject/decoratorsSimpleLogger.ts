function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log(`Creating an instance of ${constructor.name}`);
            super(...args);
        }
    };
}

export { SimpleLogger };
