//inheritence -allows the new class to inherite the properties or 
//methods of the existing class 

//super keyword- used in class to call the constructor or 
//access the properties or the method of the parent

class animal{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    move(speed)
    {
        console.log(`this  ${this.name} moves at a speed of ${speed}`);
    }
}

class Rabbit extends animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runspeed);
    }
}

class Fish extends animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}

const rabbit=new Rabbit("rabbit",5,30);
const fish=new Fish("fish",2,20);

console.log(`name: ${rabbit.name}`);
console.log(`age: ${rabbit.age}`);
console.log(`runspeed: ${rabbit.runspeed}`);

rabbit.run();