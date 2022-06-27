/**
 *
 *
 /给定一个 object (如下所示)，输入一个 from 和一个 to，要求返回从 from 到 to 是否存在路径:
 *
 */
let map = {
    "purse": "hand purse",
    "bag": "backpack",
    "backpack": "sports backpack",
    "iphone": "apple watch",
    "wallet": "leather wallet"
}

let keys = new Set(Object.keys(map));
let path = [];

function check(from, to) {
    path.push(from);
    if (!keys.has(from)) {
        return false;
    }
    if (map[from] === to) {
        path.push(to);
        return true;
    } else {
        return check(map[from], to);
    }
}

console.log(check('iphone', 'backpack'));
console.log(path);