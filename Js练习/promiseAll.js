/**
 *  全部的promises完成后返回结果
 *  任何一个promise失败 就返回失败的原因
 * */

function all (...promises) {
    let res = new Array(promises.length);
    let count = 0;
    return new Promise( (resolve,  reject) => {
        promises.forEach((promise, index) => {
            promise.then(
                (value => {
                    res[index] = value;
                    count ++;
                    if (count === promises.length) {
                        resolve(res);
                    }
                }),
                (err => {
                    reject(err);
                })
            );
        })
    })
}