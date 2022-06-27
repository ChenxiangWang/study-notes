class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, score) {
        super(name);
        this.score = score;
    }

    introducer() {
        console.log(this.name + this.score);
    }
}


const p = new Student('chenxiang', 100);
p.introducer();