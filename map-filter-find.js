const numbers = [15, 10, 25, 36, 40, 5];
//use of map
const element = numbers.map(number => {
    number = number*2;
    return number;
});
console.log('mapped', element);
const names = ['sabbir', 'sadat', 'shihab', 'akib', 'rakib'];
//use of filter 
const filtered = names.filter(element =>{
    if(element.includes('s')){
        return element;
    }
});
console.log('filtered', filtered);
//use of find
const finded = names.find(e=>{
    if(e.includes('s')){
        return e;
    };
})
console.log('founded', finded);

//for each use
names.forEach(e=>{
    console.log(e);
})

