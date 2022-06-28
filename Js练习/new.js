function A(name) {
    this.name = name;
}
A.prototype = {
    sayHi: function () {
        console.log(this.name);
    }
}

function new2(A, name) {
    let obj = {}; // 1. 创建一个空白对象
    obj.__proto__ = A.prototype; //2. 构建引用关系
    A.call(obj, name); // 3. 执行函数 初始化对象
    return obj; // 4. 返回对象
}

let obj = new2(A, 'wang');
obj.sayHi();
console.log(obj);

