// ------------ 问题 2：实现 unique 函数
/** 对数组或 iterable 中的每一项调用 selector，selector 返回的值作为 key 对数组去重（重复值保留后出现的那个）
 *  要求：时间复杂度 O(n)
 **/

function unique (iterable, selector) {
    let map = new Map();
    // O(n)
    iterable.forEach(item => {
        map.set(selector(item), item);
    })
    // O(1)
    let res = new Array(map.size);
    let i = 0;
    // O(n)
    for (let v of map.values()) {
        res[i++] = v;
    }
    return res;
}

const users = [
    { name: 'aaa', age: 12 },
    { name: 'bbb', age: 13 },
    { name: 'aaa', age: 14 },
]

console.log(unique(users, u => u.name))  // 得到 [{ name: 'aaa', age: 14 }, { name: 'bbb', age: 13 }]