function throttle(fn, wait) {
    let timer = null;
    return function (...args) {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn(...args)
            clearTimeout(timer);
            timer = null;
        },  wait);
    }
}