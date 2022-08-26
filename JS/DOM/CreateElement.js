
// Element Oluşturma

const li = document.createElement('li');

// Add Class

li.className = "task-li";
li.id = "added-task";

// Attribute

li.setAttribute('title', "New Item");
li.setAttribute("data-id", "5");

// const text = document.createTextNode("New Task");
// li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.setAttribute("class", "delete-task");

/*
const span = document.createElement("span");
span.setAttribute("class", "material-symbols-outlined");
span.textContent = "close"
*/


/* Oluşturulan elemanların üst sınıflara eklenmesi: 
a.innerHTML= `<span class="material-symbols-outlined">close</span>`;
li.appendChild(a);

ul = document.querySelector("#task-list-ul");
ul.appendChild(li);
*/

// Düzenleme:

const taskDiv = document.createElement("div");
taskDiv.setAttribute("class", "task-box");
const delTaskDiv = document.createElement("div");
delTaskDiv.setAttribute("class", "task-delete-box");
const taskText = document.createElement("h4");
taskText.textContent = "New Task";
a.innerHTML= `<span class="material-symbols-outlined">close</span>`;
delTaskDiv.appendChild(a);
taskDiv.appendChild(taskText);
li.appendChild(taskDiv);
li.appendChild(delTaskDiv);
ul = document.querySelector("#task-list-ul");
ul.appendChild(li);







console.log(li)