// one parametered arrow
const mul = x => x*x;
console.log(mul(4)); 
// two parametered function
const sum = (a=0,b=0) => a+b;

console.log(sum(15,15));

// No parametered function
const message = () => 'no parameter';

console.log(message());

// multiline arrow functon
const multi = (a,b,c) =>{
    const first = a*b+2;
    const second = first + c;
    return second;
}
console.log(multi(5,3,5));
