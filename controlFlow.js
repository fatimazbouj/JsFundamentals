//for loop

for (let i = 0; i <= 5; i++) {
  console.log(`in loop: ${i}`);
}
console.log("loop finished!");

let names = ["fati", "merriem", "chaima", "zineb", "oumaima"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//while loop
let i = 0;
while (i < 5) {
  console.log(`in while loop: ${names[i]}`);
  i++;
}

//do while loop(execute once even the condition isen't true (began with do block))
let j = 5;
do {
  console.log(`the val of j is: ${j}`);
  j++;
} while (j < 5);

//if statements with logical operators
let age = 29;

//and operator &&
if (age > 20 && typeof age == "number") {
  console.log("you are over 20");
  //or operator ||
} else if (age < 20 || age == 20) {
  console.log("you are under 20");
  // not operator !
} else if (!age) {
  console.log("the age is not provided!");
} else {
  console.log("the age is not appropriate");
}

// continue and break
const scores = [23, 98, 100, 0, 1, 3];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] == 0) {
    continue;
  }
  console.log(`your score is ${scores[i]}`);

  if (scores[i] >= 100) {
    console.log("concats you have reached the top score");
  }
}

// switch statemant
const grade = "F";
switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  case "F":
    console.log("you got an F!");
    break;
  default:
    console.log("not a valid grade!");
}
