function compose (...fns) {
    return function (...args) {
        let res = fns[0](...args);
        for (let i=1; i<args.length; i++) {
            res = fns[i](res);
        }
        return res;
    }
}

function add (a, b) {
    return a + b;
}

function mul3(x) {
    return x * 3;
}

let composed = compose(add, mul3);
console.log(composed(2,2))