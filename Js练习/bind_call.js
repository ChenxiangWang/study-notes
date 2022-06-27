function bind_call (fn, obj) {
    return (...args) => {
        fn.call(obj,...args);
    }
}

function call (fn, obj, ...args) {
    let symbol = Symbol('call');
    obj[symbol] = fn;
    let res = obj[symbol](...args);
    delete( obj[symbol]);
    return res;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

function sayHi(text) {
    console.log('hi, ' + this.name + ', ' + text);
}

let p = new Person('chenxiang');
bind_call(sayHi, p)("this is my new bind_call");

call(sayHi, p, "how are you");