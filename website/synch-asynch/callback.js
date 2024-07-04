//synchronous-sequencial orderly executes the functions it's going to wait untill it's completed
// function one(){
//     console.log(`one`);
// }
// function two(){
//     console.log(`two`);
// }
// function three(){
//     console.log(`three`);
// }
// one();
// two();
// three();


// //asynchronous-it's not gonna wait it's executes the next function
// function one(){
//     console.log(`one`);
// }
// function two(){
//     setTimeout(()=>{console.log(`two`)},1000)
// }
// function three(){
//     console.log(`three`);
// }
// one();
// two();
// three();


//callback()-no error handling/code is hard to understand/unreadable
// function one(){
//     console.log(`one`);
// }
// function two(callback){
//     setTimeout(()=>{ console.log(`two`) 
//                     callback()},1000)
   
// }
// function three(){
//     console.log(`three`);
// }
// one();
// two(three);

//Nested-callback()
function callbackHell(){
    setTimeout(()=>{console.log('one')
        setTimeout(()=>{console.log('two')
            setTimeout(()=>{console.log('three')
            },500)
        },1000)
    },2000)
}
callbackHell();


