
/**
 *
 * 递归调用flat
 * */

function flat (arr) {
    let res = [];
    for (let element of arr) {
        if (element instanceof Array) {
            res.push(...flat(element));
        } else {
            res.push(element);
        }
    }
    return res;
}

console.log(flat([1,2,3,4,[1,2,3,4,[2,1],[]]]))