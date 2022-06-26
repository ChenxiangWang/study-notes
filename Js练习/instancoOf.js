function instanceOf(left, fn) {
    let check = left.__proto__;
    let target = fn.prototype;
    while (check) {
        if (check === target) {
            return true;
        }
        check = check.__proto__;
    }
    return false;
}

console.log(instanceOf(new Array([1]), Array));
