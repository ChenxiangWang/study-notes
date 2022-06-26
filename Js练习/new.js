/**
 * 建立起引用关系即可
 *
 * */

function new2 (Constructor, ...args) {
    let obj = {};
    obj.__proto__ = Constructor.prototype;
    return obj;
}