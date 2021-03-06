/**
 *  获取全部promise的执行后的状态
 *
 * */

function allSettled (promises) {
    let res = new Array(promises.length);
    let count = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((p, index)=> {
            p.then((value => {
                res[index] = value;
                count++;
                if (count === promises.length) {resolve(res)}
            }), err => {
                count++;
                res[index] = err;
                if (count === promises.length) {resolve(res)}
            })
        })
    })
}