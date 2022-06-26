/**
 * dfs
 *
 * */

function deepClone(obj) {
    if (typeof obj !== 'object')  {
        return obj;
    } else {
        if (obj instanceof Array) {
            let res =  new Array(obj.length);
            for (let i = 0; i < res.length; i++) {
                res[i] = deepClone(obj[i]);
            }
            return res;
        } else {
            let newObj = {};
            for (let key of Object.keys(obj)) {
                newObj[key] = deepClone(obj[key]);
            }
            return newObj;
        }
    }
}

let a = {
    name: 'a',
    list: ['b', {c: 'c'}],
    address: {
        city: 'e',
        sub: {
            n: 'f',
        }
    }
}

let b = deepClone(a);
console.log(b.list === a.list);
console.log(a.address.sub === b.address.sub);