//function declaration (if we write this declaration in the end of our
// script just after calling it it will work fine)

function greet() {
  console.log("greet function");
}

//function expression (but if we write this expression in the end of the file after it's call ,
//this will crashe!
// because we can do this with functions declarations and not expressions)

const speak = function (time = "night", name = "Mark") {
  console.log(`good ${time} ${name}`);
};

greet();
greet();
greet();

speak("morning", "FatimaZ"); //good morning FatimaZ
speak("morning"); //good morning Mark
speak(); //good night Mark

//regular function
const radius = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

//arrow function

// if we have more than one parameter we need parenthesis like this
// const calcArea = (param1,param2) => {} with one we can write just
//const calcArea = param1 => {}
const calcArea = (radius) => 3.14 * radius ** 2;

const area = radius(4);
const area1 = calcArea(5);
console.log(area);
console.log(area1);

const speekAgain = () => console.log("hello again");

speekAgain();

//regular function
const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
//arrow function

const bill1 = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([19, 10, 15], 0.2));
console.log(bill1([19, 10, 15], 0.2));

//methods (call them using dot ".")

const myName = "fatima zahra";
const results = myName.toUpperCase();
console.log(results);

//callbacks and foreach

const myFunc = (callbackFunc) => {
  let val = 50;
  callbackFunc(val);
};

// regular function
myFunc(function (val) {
  console.log(`the value is ${val}`);
});

//arrow function

myFunc((val) => {
  console.log(`the value is ${val} again`);
});
