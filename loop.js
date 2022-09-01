const names = ['sabbir', 'sadat', 'shihab', 'akib', 'rakib'];
//for each use
names.forEach(n => {
    if(n.includes('r')){
        console.log('i am from foreach', n);
    }
});
//for of loop
for(const name of names){
    console.log(name);
}
//while loop 
let i=0;
while(i <= names.length-1){
    console.log(names[i]);
    i++;
}