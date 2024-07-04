//callback function-function is passed as a arguments in the function

// hello(goodbye);
// function hello(callback){
//     console.log(`hello`);
//     callback();
// }
// function goodbye(){
//     console.log(`goodbye`);
// }


//.forEach() Method- to display array elements 

// const number=[1,2,3,4,5];
// number.forEach(display);
// function display(element)
// {
//     console.log(element);
// }

// let fruits=["apple","banana","orange"];
// fruits.forEach(uppercase);
// fruits.forEach(display);
// function uppercase(element,index,array)
// {
//     array[index]=element.toUpperCase();
// }
// function display(element)
// {
//     console.log(element);
// }


//.map() Method-without loosing the original array 

// const number=[1,2,3,4,5];
// const squares=number.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element,2);
// }


//.filter() Method-filtering and creating new array

// let number=[1,2,3,4,5];
// let evennumber=number.filter(iseven);
// let oddnumber=number.filter(isodd);
// function iseven(element){
//     return element%2===0;
// }
// function isodd(element){
//     return element%2!==0;
// }
// console.log(evennumber);
// console.log(oddnumber);


//.reduce() Method()-making a single unit

// const prices=[10,20,30,40,50,0];
// const total=prices.reduce(sum);
// function sum(accumulator,element)
// {
//     return accumulator+element;
// }
// console.log(total);
