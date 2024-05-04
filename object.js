//object literals

const blogs = [
  {
    title: "Block1",
    likes: 30,
  },
  {
    title: "Block2",
    likes: 15,
  },
];

let user = {
  name: "fatima zahra",
  age: 29,
  email: "fatima.z.b@gmail.com",
  location: "morocco",
  blogs: blogs,
  login: function () {
    console.log("the user logged in!");
  },
  logout: () => {
    console.log("user logged out!");
  },
  //if we want to use "this" keyword to get object's properties we must use a regular function
  //because if we use arrow function the "this" keyword will always refer to the global variable
  //which is the window object
  logBlogs: function () {
    // access to same object's property using "this" keyword
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

console.log(user);

//get user properties
console.log(user.name);
console.log(user["name"]); //other way to call properties

console.log(user.email);
user.age = 35;
user["age"] = 40; //other way to update properties
console.log(user.age);

//object methods

user.login();
user.logout();
user.logBlogs();

//Math object

//math constants
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); //round the number to the nearest integer
console.log(Math.floor(area)); //floor the number to the number below
console.log(Math.ceil(area)); //round the number up
console.log(Math.trunc(area)); //take away the decimal and leave the integer
console.log(Math.random()); //random numbers
console.log(Math.round(Math.random() * 100)); //nice way to get random numbers from 1 to 100

//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`); //score one: 50, score two: 50
scoreTwo = 100;
console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`); //score one: 50, score two: 100

//reference types

const userOne = { name: "Jack", age: 30 };
const userTwo = userOne;
console.log(
  `user one: ${JSON.stringify(userOne)}\nuser two: ${JSON.stringify(userTwo)}`,
); //user one: {"name":"Jack","age":30} user two: {"name":"Jack","age":30}
userOne.age = 40;
console.log(
  `user one: ${JSON.stringify(userOne)}\nuser two: ${JSON.stringify(userTwo)}`,
); //user one: {"name":"Jack","age":40} user two: {"name":"Jack","age":40}
