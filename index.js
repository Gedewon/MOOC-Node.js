
var rect = require('./rectangle');
function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

  rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR:",err.message)
        }else if (rectangle){
            console.log("The area is= " + rectangle.area()
                        + "The paremeter is = " + rectangle.perimeter())
        }
  });
}

solveRect(2,4);
