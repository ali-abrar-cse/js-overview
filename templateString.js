const student = {
    name: 'sabbir',
    age: 18,
    occupation: 'student',
    address: 'Dhaka',
    personal:{
        spouse: 'nai', 
        spooueName: 'nai'
    }
}
//templatestring
const info = `I'm ${student.name}. I live in ${student.address}.`

console.log(info);