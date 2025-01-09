const factorial=function(n){
    if(n<=1){
        return 1;
    }
     else
        {
            return n*factorial(n-1);
        }
    }
const fact=(n)=>{
    if(n<=1){
        return 1;
    }
    else
    {
     return n*fact(n-1);
    }
}

console.log(factorial(5));
console.log(fact(5));

var arr=[1,2,3,4,5];
console.log("elements of array:");
arr.forEach((x)=>console.log(x));

var sarr=arr.map((x)=>x*x);
console.log(sarr);

var farr=arr.filter((x)=>x%2==0);
console.log(farr);

var sum=arr.reduce((x,y)=>x+y,0);
console.log(sum);

var foundArrow = arr.find((x) =>x > 3);
console.log(foundArrow);
