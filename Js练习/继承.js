/**
 *  原型继承： 子类的原型 ---> 父类的实例
 *  parent class: A
 *  child class : B
 *  B.prototype = new A()
 * */
function A () {}
function B () {}
B.prototype = new A();

/**
 *  构造函数内实现的继承: child class 内调用构造函数 D.call
 *  子类的的原型还是子类的原型，但是子类的无法接触到父类原型的方法
 * */
function C() {}

function D() {
    D.call(this);
}

/**
 * 组合继承：
 *
 * */

function E(){}
F.proptype = new E();
function F() {
    E.call(this);
}