//demonstrate how inner function can access variables of outer function using closures in js and implement data hiding with closures
function outerFunction() {
  let count = 0;

  function increment() {
    count++;
    console.log("count after increment:", count);
  }

  function decrement() {
    count--;
    console.log("count after decrement:", count);
  }

  function getValue() {
    return count;
  }

  return  {
     increment: increment,
     decrement: decrement,
     getValue: getValue
   };
}

const counter = outerFunction();

counter.increment();
counter.increment();
counter.decrement();

console.log("Accessing counter:", counter.getValue());
