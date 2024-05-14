// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

let Obj ={
    name : "Alishba",
    outerMethod : function(){
        console.log(this.name)
    
    const innerMethod =() => {
        console.log(this.name);
    }
     innerMethod();   
    }
}
Obj.outerMethod();

