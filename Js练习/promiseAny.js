/**
 *  任何一个对象成功就返回其结果
 *  与all相反, 这个收集错误结果
 * */

function any(promises) {

    let errs = new Array(promises.length);
    let count = 0;

    return new Promise(((resolve, reject) => {
        promises.forEach( (promise,index) => {
            promise.then((value) => {
                resolve(value);  // 因为promise状态改变后就不能再次改变
            }, err => {
                count++;
                errs[index] = err;
                if (count === promise.length) {
                    reject(errs);
                }
            })
        })
    }))
}