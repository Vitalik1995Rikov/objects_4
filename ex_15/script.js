let obj = {
    name: 'alex', 
    surname: 'popov',
    toString() {
        return this.name;
    }
}

let descriptor = Object.getOwnPropertyDescriptor(obj, 'surname');
console.log(descriptor);


Object.defineProperty(obj, 'name', {writable: false}); // теперь нельзя поменять имя
let descriptorName = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptorName);


Object.defineProperty(obj, 'age', {value: 2});
let newDescriptor = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(newDescriptor);

Object.defineProperty(obj, 'toString', {
    enumerable: false // теперь не будет перебираться в цикле
});

for (let key in obj) {
    console.log(key);
}