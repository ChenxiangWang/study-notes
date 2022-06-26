class LazyMan_Promise {

    constructor(name) {

        this.promise = null;
        this.tasks = [];
        this.sayHi(name);

        queueMicrotask(() => {
            for (let t of this.tasks) {
                if (!this.promise) {
                    this.promise = new Promise((resolve, reject) => {
                        if (typeof t === 'function') {
                            t();
                            resolve();
                        } else {
                            setTimeout(() => {
                                console.log('sleep: ', t.sleep);
                                resolve();
                            }, t.sleep);
                        }
                    })
                } else {
                    this.promise = this.promise.then(() => {
                        return new Promise((resolve, reject) => {
                            if (typeof t === 'function') {
                                t();
                                resolve();
                            } else {
                                setTimeout(() => {
                                    console.log('sleep: ', t.sleep);
                                    resolve();
                                }, t.sleep);
                            }
                        })
                    })
                }
            }
        })

    }

    sayHi(name) {
        this.tasks.push(() => {
            console.log('sayHi: ' + name);
        })
    }

    eat(name) {
        this.tasks.push(() => {
            console.log('eat: ' + name)
        })
    }

    sleep(timer) {
        this.tasks.push({sleep: timer})
    }

    sleepFirst(timer) {
        this.tasks.unshift({sleep: timer})
    }
}

let man = new LazyMan_Promise("w");
man.eat('hi');
man.sleep(1000);
man.sleepFirst(2000);
man.eat('hhh');