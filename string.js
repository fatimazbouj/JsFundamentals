//string

console.log('hello, world');

let email='fatima.Z.b@gmail.com';
console.log(email);

// string concatenation

let firstname="Bouj";
let lastname="fatimaz";
let fullname= firstname + " "+lastname ;
console.log(fullname);

// getting characters

console.log(firstname[0]);

// string length

console.log(fullname.length);


// string methods

console.log(fullname.toUpperCase());
const result =fullname.toLowerCase();
console.log(result);

// get index of a letter
const index= email.indexOf('@');
console.log(index);
// get last index of a letter

const lastIndexOf=email.lastIndexOf('m');
console.log(lastIndexOf);

// get a slice of a string
const slice= email.slice(4,10);
console.log(slice);

// get a substr of a string (how much of caracters we want to go along)
const substring= email.substr(4,10);
console.log(substring);

// replace the first iteration of a caracter with an other
const replace= email.replace('m','w');
console.log(replace);
