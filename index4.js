function multiplyByTwo(a){
    let arr=a.map((value) =>  {
        return value*2;
    });
    return arr;
    
    }
    
   let a=[1,2,3,4,5];
    
    var r=multiplyByTwo(a);
    console.log(r);