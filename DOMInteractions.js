const p = document.querySelector("div.error");
console.log(p);

const ps = document.querySelectorAll("p");
console.log(ps);
ps.forEach((p) => {
  console.log(p);
});
console.log(ps[2]);

const errors = document.querySelectorAll(".error");
console.log(errors);

//get element by id
const title = document.getElementById("titleOfPage");
console.log(title);

//get elements by class name
//We cann not use foreach to a collection here
const errorsList = document.getElementsByClassName("error");
console.log(errorsList);
console.log(errorsList[0]);

//get elements by tag name
//We cann not use foreach to a collection here
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]);

//update items content

const para = document.querySelector("p");
//update text
console.log(para.innerText);
para.innerText += ",People are kind!";

ps.forEach((para) => {
  console.log(para.innerText);
  //   para.innerText += "new text";
});

//update html

const content = document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML = "<h2>this is a content</h2>";

const people = ["fatimaZ", "merriem", "oumaima"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

//interact with attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.linkedin.com");
link.innerText = "Link to linkedin";

const mssg = document.querySelector("div.error");
console.log(mssg.getAttribute("class"));
//update the attribute
mssg.setAttribute("class", "success");
//add the attribute
mssg.setAttribute("style", "color:red");
//add style to an existing one
// title.setAttribute("style", "margin:50px"); this will overwrite it
console.log(title.style);
title.style.margin = "50px";
title.style.fontStyle = "italic";
//remove property
title.style.fontStyle = "";

//add or remove classes
const divMsg = document.querySelector(".errorMsg");
console.log(divMsg.classList);
divMsg.classList.add("centralizedText");
divMsg.classList.remove("success");

//innerText vs textContent
const pTags = document.querySelectorAll(".paras p");
console.log(pTags);

pTags.forEach((p) => {
  console.log(p.innerText);
});
console.log("-------------------");
pTags.forEach((p) => {
  console.log(p.textContent);
  if (p.textContent.includes("error")) {
    p.classList.add("errorMsg");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("successMsg");
  }
});

//toggle a class
title.classList.toggle("test");
