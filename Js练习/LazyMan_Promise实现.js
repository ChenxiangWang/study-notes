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
        return this;
    }

    eat(name) {
        this.tasks.push(() => {
            console.log('eat: ' + name)
        })
        return this;
    }

    sleep(timer) {
        this.tasks.push({sleep: timer})
        return this;
    }

    sleepFirst(timer) {
        this.tasks.unshift({sleep: timer})
        return this;
    }
}

let man = new LazyMan_Promise("w");
man.eat('hi').sleep(1000).sleepFirst(2000).eat('hhh');
