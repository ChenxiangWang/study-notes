class LazyMan {
    constructor(name) {
        this.tasks = []
        this.tasks.push(() => {
            console.log('hi', name);
            this.next();
        });
        setTimeout(()=> {
            this.next();
        })
    }

    next() {
        if (this.tasks.length > 0) {
            this.tasks.shift()();
        }
    }

    sayHi(name) {
        this.tasks.push(() => {
            console.log('sayHi', name);
            this.next();
        })

        return this;
    }

    eat (name) {
        this.tasks.push(() => {
            console.log('eat', name);
            this.next();
        })
        return this;
    }


    sleep(wait) {
        this.tasks.push(()=> {
            setTimeout(()=> {
                console.log('sleep', wait);
                this.next();
            }, wait)
        })
        return this;
    }


    sleepFirst(wait) {
        this.tasks.unshift(()=> {
            setTimeout(()=> {
                console.log('selectFirst', wait);
                if (this.tasks.length > 0) {
                    this.tasks.shift()();
                }
            }, wait)
        })
        return this;
    }
}

new LazyMan('wang').eat('food').sleep(1000).eat('ice cream').sleepFirst(1000);