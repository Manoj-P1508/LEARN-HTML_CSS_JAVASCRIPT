//function expression-a way to define a functions as a values or variables.
setTimeout(function(){console.log("hey");},3000);

//arrow function-simple function that you use only once (parameters)=>some code.
const hello=() =>console.log("hello");
hello();

const hi=(name,age)=>{  console.log(`Hi ${name}`);
                        console.log(`your age is ${age}`);};
hi(`manoj`,26); 



