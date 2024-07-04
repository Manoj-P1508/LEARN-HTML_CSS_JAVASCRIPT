//object-is a collection of the related properties or a methods 
//represting the place,property,people

// const person={
//     firstname:"manoj",
//     secondname:"P",
//     age:26,
//     student:false,
//     hi: function(){console.log("hi how are you")}
// }
// person.hi();
// console.log(person.firstname);

//THIS keyword-reference of the object

// const person={
//     firstname:"manoj",
//     lastname:"P",
//     age:26,
//     student:false,
//     hi:function(){ console.log(`Hi ${this.firstname} ${person.lastname} `)}
   
// }
// person.hi();

//constructors-special method for defining the properties and methods of the objects
// whice is reusable


// function car(make,model,year,color)
// {
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive=function(){console.log(`you drive ${this.model}`)}
// }
// const car1= new car("ford","mustang",2024,"red");
// const car2=new car("chevrolet","camaro",2025,"blue");
// console.log(car1.make);
// car1.drive();