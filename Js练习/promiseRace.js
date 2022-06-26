/**
 *
 * 任何一个promise有结果就resolve / reject
 * */

function race (promises) {
    return new Promise((resolve, reject) => {
        promises.then( value => {
            resolve(value);
        }, err => {
            reject(err);
        })
    })
}