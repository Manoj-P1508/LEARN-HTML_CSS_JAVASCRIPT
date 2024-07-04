class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayproduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price}$`);
    }
}

const product1=new product("shirt",100);
product1.displayproduct();



//static keyword

class user{
    static usercount=0;
    constructor(username)
    {
        this.username=username;
        user.usercount++;
    }
    static getusercount()
    {
        console.log(`there are ${user.usercount} users online`);
    }
    hi()
    {
        console.log(`hi! my username is ${this.username}`);
    }
}

const user1=new user("boss");
console.log(`${user1.username}`);
console.log(`${user.usercount}`);
user1.hi();
user.getusercount();