let num=prompt("Enter the numerator");
let deno=prompt("Enter the denominator");
let division = new Promise((resolve, reject) => {
    if(deno != 0)
    {
        let div = num/deno;
return Promise.resolve(div);
        
    }
    else
    {
return Promise.reject("Denominator is zero");
    }
}) 

division
   .then((data=>{
   console.log("Here is the division value",data);
   }
   ))
   .catch((error)=>{
       console.log("Oh no",error);
   })
   .finally(()=>{
       console.log("The is result of division os given numbers");
   })

