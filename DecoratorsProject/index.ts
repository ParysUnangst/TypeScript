import MyTestClass from './MyTestClass';

const myClassInstance = new MyTestClass('test', 42);
myClassInstance.method1();
myClassInstance.method2();

console.log(myClassInstance.readOnlyProp);
// Uncomment the following line to see the effect of attempting to modify a read-only property
// (myClassInstance as any).readOnlyProp = 'new value';
