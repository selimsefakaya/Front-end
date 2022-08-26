
/**********Elementler Üzerinde Gezinme**********/

let value;
const todoList = document.querySelector('#task-list-ul');
const todo = document.querySelector(".task-li:nth-child(2)");
const card = document.querySelector(".add-task");

value = todoList;
value = todo;
value = card;


// Child Nodes

value = todoList.childNodes;        //NodeList(9)
//li tagleri arasında satır atlandığı için onları text olarak sayar ve 9 madde çıkarır.
//Bunun önüne geçmek için li tag'ini kapatıp ardından yenisini açarken satır atlanılmadan açılmalıdır.
//veya;
value = todoList.children;          //HTMLCollection(4)
value = todoList.children[0]
value = todoList.children[todoList.children.length-1]       //last item
value = todoList.children[1].textContent = "Task Changed"

value = card;
value = card.children;
value = card.children[1].children[0].textContent = "Item changed.";

value = todoList;
value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;


//Child >> Parent

value = card;
value = card.parentElement;
value = card.parentElement.parentElement;


// Child >> Child

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;




console.log(value);
