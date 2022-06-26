function curry(fn) {
    return function curried(...args1) {
        if (args1.length === fn.length) {
            return fn(...args1);
        } else {
            return function (...args2) { // 继续接受新的参数 填入 curried function
                return curried(...args1, ...args2);
            }
        }
    }
}

function add(a,b,c,d){
    return a+b+c+d;
}

let adder = curry(add);
console.log(adder(1,2)(3,4));