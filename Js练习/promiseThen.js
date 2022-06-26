/**
 * 简单版 promiseThen
 * 核心： 新的promise的状态的更新、成功/失败的回掉 订阅至第一个promise
 *
 * */

function promiseThen(promise, onFulfill, onReject) {
    return new Promise((resolve, reject) => {
        try {
            if (promise.state === 'fulfilled') {
                resolve(onFulfill(promise.value));
            } else if (promise.state === 'rejected') {
                reject(onReject(promise.reason));
            } else {
                promise.onResolvedCallbacks.push(() => {
                    try {
                        resolve(onFulfill(promise.value));
                    } catch (err) {
                        reject(err);
                    }
                });
                promise.onRejectedCallbacks.push(() => {
                    try {
                        resolve(onFulfill(promise.reason));
                    } catch (err) {
                        reject(err);
                    }
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}