/**
 * 递归版本 可以通过多余参数 controller来实现控制
 * */

function myInterval (fn, wait, controller) {
    let timer = setTimeout(()=> {
        fn();
        timer = null;
        if (!controller || !controller()) {
            myInterval(fn, wait, controller);
        }
    }, wait)
}

myInterval(()=> {
    console.log('hi')
}, 2000, getControllers(3));

function getControllers(times) {
    let count = 0;
    return function () {
        console.log(count, times);
        if (count < times) {
            count++;
            return false;
        }  else {
            return true;
        }
    }
}