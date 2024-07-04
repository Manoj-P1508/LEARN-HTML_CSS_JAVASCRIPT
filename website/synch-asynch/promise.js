//promise-resolved or rejected state by using .then/.catch
function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log('one');resolve();},0)})
}
function two(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log('two');resolve();},3000)})
}
function three(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log('three');resolve();},0)})
}

//chaining
one().then(two).then(three).catch((error)=>{console.error("an error occuredd: ",error);});
