
     //it can be redeclared as well as,reassigned
    //if var is declared as a globel scope it can be escaped from the function scope
    // var v=1;                
    // function fun1(){        
    //     v=2;                
    //     console.log(v);
    // }
    // console.log(v);
    // fun1();
    // if(true){
    // v=3;                
    // console.log(v);
    // }
    // console.log(v);
    //if var is declared within the function scope, it will not escape from the function scope or curly braces
    function varr()
    {
        var a=10;
        console.log(a);
    }
    varr();
    // //but it can escape from the conditions and loops
    if(true)
    {
        var b=20;
        console.log(b);
    }
    console.log(b); 




//let can be reassigned but it can't redeclared
    // let v=10;
    // function fun1(){
    // let v=20;
    // console.log(v);
    // }
    // console.log(v);
    // fun1();
    // if(true){
    //     v=30;
    //     console.log(v);
    // }
    // console.log(v);
    // fun1();


/*
    //cosnt can't redeclared as well as, it can't reassigned
    const a=100;
    //a=200; or const a=300; is not possible
*/

