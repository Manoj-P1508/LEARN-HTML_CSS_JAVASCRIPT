//asynch await- making asynchronous function as a synchronous function try/catch
async function one()
{
    console.log(`one`);
}
async function two()
{
    return new Promise((resolve) => {setTimeout(() =>{console.log(`two`);resolve();
    },1000);
    });
}
async function three(){
    console.log(`three`);
}
async function print(){
    try{
        await one();
        await two();
        await three();
    }
    catch(error){
        console.log('error:',error);
    }
}
print();