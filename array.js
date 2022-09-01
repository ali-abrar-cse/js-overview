const names = ['sabbir', 'sadat', 'shihab', 'akib', 'rakib'];
console.log(names, names.length);
//adding at last 
names.push('rita');
console.log(names,names.length);
//searching an elements index no
console.log(names.lastIndexOf('shihab'));
//changing value of index
names[2] = 'shoyeb';
console.log(names);
console.log(names.includes('akib'));
