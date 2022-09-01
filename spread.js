const names = ['sabbir', 'sadat', 'shihab', 'akib', 'rakib'];
// if we try to copy an array by assigning that array to a new variable, copied array will be updated if we change the first array. there still a connection between them. 
// here comes the spread operator to copy without dependencies

const newArray = [...names];
console.log('its new', newArray);

// to copy and add new value
const copyAdd = [...names,'Runa', 'mimi'];
console.log('added', copyAdd);

const duplicate = names;
names.push('mita');
console.log(names,duplicate);

