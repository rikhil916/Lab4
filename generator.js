  function* fungen(){
    console.log("function started");
    yield;
    console.log("afte 1st yield");
    yield "second yield";
    console.log("after 2nd yield");
    return "function closed";
  }
  const g=fungen();
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  
  

  function* Fib(n,a=0,b=1){
    if(n<=0) return;
    yield a;
    yield* Fib(n-1,b,a+b);
  }
  const f=Fib(5);
  console.log(f.next().value);
  console.log(f.next().value);
  console.log(f.next().value);
  console.log(f.next().value);
  console.log(f.next().value);