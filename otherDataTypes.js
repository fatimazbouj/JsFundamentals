// undefined type
let p;
// p is undefined , the first value will print "the value of p is undefined"
// and the second one will print NaN (not a number)
console.log(`the value of p is ${p}`, p + 3);
// null type (set a value to the variable)
let n = null;
// pn is null , the first value will print "the value of p is null"
// and the second one will print 3
console.log(`the value of p is ${n}`, n + 3);

// Boolean type
// Boolean comparison
console.log(true, false, "true", "false");
// methods can return Boolean
let email = "fatima.z.b@gmail.com";
console.log(email.includes("@"));

let names = ["fati", "merriem", "chaima", "zineb", "oumaima"];
console.log(names.includes("fati"));

// comparison operators
let age = 25;
console.log(age == 30); //equal
console.log(age != 30); //not equal
console.log(age > 30); //greater than
console.log(age < 30); //less than
console.log(age >= 30); //greater than or equal
console.log(age <= 30); //less than or equal

let myname = "fati";
console.log(myname == "fati"); //equal
console.log(myname == "Fati"); //not equal
console.log(myname > "merriem"); //greater than
console.log(myname < "Fati"); //less than

console.log(age == "25"); //true
console.log(age === "25"); //false (type check included)
console.log(age !== "25"); //true (type check included)

// type conversion
let score = "100";
score = Number(score);
console.log(score + 1);
console.log(typeof score);
let string = String(score);
console.log(typeof string);
let Bool = Boolean("score");
console.log(typeof Bool, Bool); //boolean , true
console.log(typeof 0, Boolean(0)); //number , false (0 falsy value)
console.log(typeof "0", Boolean("0")); //string , true (string of 0 it's a string with length != 0)
console.log(typeof "", Boolean("")); //string , false (empty string it's a falsy value)
