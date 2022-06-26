/**
 *
 * 一个搜索输入框， 用户不停的进行输入（这个时候就是抖动的过程）， 等用户输入停止之后，再触发搜索
 * 多次点击只触发一次
 *
 * */

function debounce (fn, wait) {
    let timer = null;
    return function (...args) {
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn(...args);
        }, wait);
    }
}