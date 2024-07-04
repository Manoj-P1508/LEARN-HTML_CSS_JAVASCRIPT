//Destructores- extract values from the object then assign them to variable in a convient way
//[]- to perform array destructuring
//{}- to perform object destructuring

//swap the values
// let a=10,b=20;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

//swap 2 elements in a array and assign values from object
// const color=["red","blue","green","white","orange"];
// const [first,second,...colors]=color;
// console.log(color);
// console.log(first);
// console.log(second);
// console.log(...colors);

//extract values from the object
// const p1={
//     first:"manoj",
//     last:"p",
//     age:26,
//     job:"prof"
// }
// const p2={
//     first:"mohit",
//     last:"m",
//     age:25
// }
// const {firstname,lastname,age,job="airport"}=p2;
// function display({first,last,age,job="airport"})
// {
//     console.log(`name:${first} ${last}`);
//     console.log(`age:${age}`);
//     console.log(`job:${job}`);
// }
// display(p2);



//nested objects- objects inside of the other objects
//allows you to represent more complex data structures
//child object is enclosed by a parent object

// const person={
//     name:"mp",
//     age:26,
//     isstudent:false,
//     hobbies:["eat","sleep","repeat"],
//     address:{
//         street:"KNH",
//         city:"blore",
//         country:"IN"
//     }
// }
// for(const property in person.address)
//     console.log(person.address[property]);


// class Address{
//     constructor(street,city,county){
//         this.street=street;
//         this.city=city;
//         this.county=county;
//     }
// }
// class person{
//     constructor(name,age,...address){
//         this.name=name;
//         this.age=age;
//         this.address=new Address(...address);
//     }
// }
// const p1=new person("a",25,"123abc","blore","india");
// console.log(p1.address);


//array of object
// const fruits=[{name:"apple",color:"red",kg:100},
//               {name:"orange",color:"orange",kg:15},
//               {name:"banana",color:"yellow",kg:5},
//               {name:"pineapple",color:"yellow",kg:25}];

//fruits.push({name:"grapes",color:"purple"});//adding extra element

//fruits.pop();//deleting the alst element

//fruits.splice(1,2);//delete certain index number

//fruits.forEach(fruit=>console.log(fruit.color));

// const fruitsname=fruits.map(fruit=>fruit.name);
// console.log(fruitsname);

// const yellow=fruits.filter(fruit=>fruit.color==="yellow");
// console.log(yellow);

// const maxkg=fruits.reduce((acc,fruit)=>fruit.kg>acc.kg?fruit:acc);
// console.log(maxkg);