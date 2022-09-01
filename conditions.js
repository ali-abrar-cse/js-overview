const a = 50;
const b = 50;
//if else use
if(a>b){
    console.log('a greater');
}
else if(b>a){
    console.log('b greater');
}
else if(a === b){
    console.log('both are equal');
}

//ternery operation
const notEqual = a !== b ? 'not equal' : 'equal';

console.log(notEqual);
