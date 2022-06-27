/**
 * js的string也属于 immutable的类型，可以遍历，但是不可以修改
 * */
let str = 'lorem ipsum';
str[1] = 'h';
console.log(str[1]);