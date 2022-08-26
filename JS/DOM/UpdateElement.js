
// Element Güncelleme

const addTaskHeader = document.querySelector(".add-task-h");

const h2 = document.createElement("h2");
h2.setAttribute("class", "add-task-h");
h2.appendChild(document.createTextNode("Add a new task!"));

const parent = document.querySelector(".add-task");
parent.replaceChild(h2,addTaskHeader);


// Class'larda güncelleme

const taskList = document.querySelector("#task-list-ul");
let value;
link = taskList.children[0].children[1].children[0];
value = link.className;
value = link.classList;
// value = link.classList[0];
link.classList.add("new-class");
link.classList.remove("new-class");


// Attribute güncelleme 

value = link.getAttribute("href");
value = link.setAttribute("href", "https://twitter.com");

value = link.hasAttribute("href");      //sorgulama, attribute var mı??






console.log(value)