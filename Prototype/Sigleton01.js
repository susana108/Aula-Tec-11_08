class Singleton{
    constructor(){
        if (Singleton.instance == null){
            Singleton.instance = this;
            this.value = 0;

        }
        return Singleton.instance;

    }

    increment(){
        this.value += 1;
        console.log(`Values: ${this.value}`);
    }
}


//cliente
const s1 = new Singleton();
const s2 = new Singleton();


console.log(s1 == s1)


s1.increment();
s2.increment();