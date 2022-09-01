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
//convert to string and again parse to object
const std = JSON.stringify(student);
console.log(std);
const stdObj = JSON.parse(std);
console.log(stdObj);

// object keys and values

console.log(Object.values(student));
for(element in student){
    console.log(student[element]);
}

console.log(Object.entries(student));



