// array destructuring


// from dirrect array
const [m,n] = [5,6];
console.log(m,n);
// from variable
const names = ['sabbir', 'sadat', 'shihab', 'akib', 'rakib'];

const [x,y] = names;
console.log(x,y);

//object destructuring
const student = {
    name: 'sabbir',
    age: 18,
    occupation: 'student',
    address: 'Dhaka',
    personal:{
        spouse: 'nai',
        spouseName: 'nai'
    }
}

const {spouse, spouseName} = student.personal;
console.log(spouse, spouseName);
