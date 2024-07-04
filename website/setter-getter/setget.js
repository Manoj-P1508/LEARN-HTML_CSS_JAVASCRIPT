class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    set width(newwidth){
        if(newwidth>0){
            this._width=newwidth;           // _ private property
        }
        else{
            console.error("width must be positive number");
        }
    }
    //setter makes writeable
    set height(newheight){
        if(newheight>0){
            this._height=newheight;
        }
        else{
            console.error("height must be positive number");
        }
    }
    //getter makes readable
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const rectangle=new Rectangle(10,20);
console.log(rectangle.width);
console.log(rectangle.height);