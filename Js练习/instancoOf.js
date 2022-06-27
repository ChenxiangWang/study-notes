class Person {

}

class Employee extends Person {

}

class Student extends Employee {

}

/**
 *  constructor 判断
 * */
function instanceOf1 (type, obj) {
    let p = obj.__proto__;
    while (p) {
        if (p.constructor === type) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
}

/**
 *  原型判断
 *
 * */

function instanceOf2 (type, obj) {
    let target = type.prototype;
    let p = obj.__proto__;
    while (p) {
        if (target === p) {
            return true;
        }
        p = p.__proto__;
    }
    return  false;
}

let s = new Student();
let p = new Person();

console.log(instanceOf1(Person, s));

console.log(instanceOf2(Person, s));
