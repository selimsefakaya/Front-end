
// DOM

/*
let data;

data = window.document;
data = window.document.head;
data = window.document.body;
data = window.document.URL;
data = window.document.domain;
data = window.document.images;
data = window.document.forms;
data = window.document.forms[0].id;
data = window.document.forms[0].method;
data = window.document.forms[0].action;
data = window.document.scripts[0].ownerDocument

console.log(data);
*/

// TODO PROJECT

// Eleman seçimi

const form = document.querySelector('form');
const input = document.querySelector('input');
const btnAdd = document.querySelector("#addButton");
const btnDeleteAll = document.querySelector("#btn-delete-all");
const taskList = document.querySelector("#task-list-ul");
const deletedList = document.querySelector("#removed-tasks-ul");
const btnClearDeleted = document.querySelector("#btn-clear-deleted");
let todos;
let todosDel;
// todos.reverse();


// Load tasks
loadItems();

eventListeners();

function eventListeners() {
    // Submit event
    form.addEventListener("submit", addNewItem);        //submit işlemi yapılınca(enter veya butona tıklanarak -button taginde type submit yapıldı-), addNewItem function çalıştır.
    // Delete event
    taskList.addEventListener("click", deleteItem);     //tek tek eleman silme işlemini gerçekleştirir.
    // Delete all event
    btnDeleteAll.addEventListener("click", deleteAll);
    // Clear deleted list event
    btnClearDeleted.addEventListener("click", clearDeleted);
    // Restore deleted task
    deletedList.addEventListener("click", restoreDeletedTask);
}


function loadItems(){
    todos = getItemsFromLS();
    todos.forEach(function(item){
        createItem(item);
    })

}


// Get items from local storage
function getItemsFromLS(){
    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


// Set item to local storage
function setItemtoLS(newTodo){
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function createItem(newTodo){
    // -li oluşturmak-
    const li = document.createElement('li');
    li.classList = "task-li";
    // li içinde a oluşturmak
    const a = document.createElement("a");
    a.classList = "delete-task";
    a.setAttribute("href", "#");
    a.innerHTML = `<span class="material-symbols-outlined">close</span>`;
    // task için div oluşturmak
    const divTask = document.createElement("div");
    divTask.classList = "task-box";
    // task name girmek
    const h4 = document.createElement("h4");
    h4.innerHTML = newTodo;
    divTask.appendChild(h4);
    // delete için div oluşturmak
    const divDelete = document.createElement("div");
    divDelete.classList = "task-delete-box";
    divDelete.appendChild(a);
    li.appendChild(divTask);
    li.appendChild(divDelete);
    taskList.insertBefore(li, taskList.children[0]);
}


function addNewItem(e) {
    if (input.value === ``) {
        alert("Please fill the new task box!");
    }
    else {
        createItem(input.value);
        setItemtoLS(input.value);
        input.value = "";
    }

    e.preventDefault();         //sayfayı yenilemeyi önledi.
}


function deleteItem(e) {
    const task = e.target.parentElement.parentElement.parentElement;
    taskContent = task.children[0].children[0].textContent;

    if (e.target.className === "material-symbols-outlined") {
        const delTask = document.createElement("li");
        delTask.className = "removed-li";
        delTask.innerHTML = task.children[0].outerHTML;
        task.remove();
        e.preventDefault();
        const divRestore = document.createElement("div");
        divRestore.className = "task-delete-box";
        divRestore.innerHTML = `<a href="#" class="delete-task">
                                        <span class="material-symbols-outlined">
                                            keyboard_double_arrow_up
                                        </span>
                                    </a>`
        delTask.appendChild(divRestore);
        deletedList.insertBefore(delTask, deletedList.children[0]);


        // Silinecek elemanın içerik adı, storage'da kayıtlı olduğu için bunu çekmek gerekir:
        deleteTodoFromLS(e.target.parentElement.parentElement.parentElement.children[0].textContent);
    }
}


function deleteTodoFromLS(deleteTodo){
    let todos = getItemsFromLS();
    todos.forEach(function(todo, index){
        if (todo === deleteTodo){
            todos.splice(index,1)   //bulunduğu indexten itibaren bir tanesini siler.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}


function deleteAll(e) {

    if (confirm(`Warning!\nAre you sure you want to delete all tasks?`)) {
        const allTasks = e.target.parentElement;
        let confirm10 = true;
        if (taskList.children.length > 10) {
            confirm10 = confirm("The deleted list can hold up to 10 tasks. You want to delete more than 10 tasks. Are you sure you want to continue?");
        }

        if (confirm10) {
            // for (let i = taskList.children.length; i > 0; i--) {

            //     const delAllTask = document.createElement("li");
            //     delAllTask.className = "removed-li";
            //     delAllTask.innerHTML = taskList.children[i - 1].children[0].outerHTML;
            //     const divRestore = document.createElement("div");
            //     divRestore.className = "task-delete-box";
            //     divRestore.innerHTML = `<a href="#" class="delete-task">
            //                                 <span class="material-symbols-outlined">
            //                                     keyboard_double_arrow_up
            //                                 </span>
            //                             </a>`
            //     delAllTask.appendChild(divRestore);
            //     deletedList.insertBefore(delAllTask, deletedList.children[0]);

            //     taskList.children[i - 1].remove();
            // }

            // or
            // sıkıntılı çalışıyor, eleman ekledikten sonra hepsini silmiyor. 
            // taskList.childNodes.forEach(function (item){
            //     if (item.nodeType === 1){
            //         item.remove();
            //     }
            // });

            //or

            // taskList.innerHTML=""

            //or

            while(taskList.firstChild){
                const delAllTask = document.createElement("li");
                delAllTask.className = "removed-li";
                delAllTask.innerHTML = taskList.children[0].children[0].outerHTML;
                const divRestore = document.createElement("div");
                divRestore.className = "task-delete-box";
                divRestore.innerHTML = `<a href="#" class="delete-task">
                                            <span class="material-symbols-outlined">
                                                keyboard_double_arrow_up
                                            </span>
                                        </a>`
                delAllTask.appendChild(divRestore);
                deletedList.appendChild(delAllTask);
                taskList.removeChild(taskList.firstChild);
            }

            localStorage.clear();

            e.preventDefault();
        }

        let count = 0;
        deletedList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                count += 1;
            }
        });

        if (count > 10) {
            for (let i = count - 1; i >= 10; i--) {
                deletedList.children[i].remove();
            }
        }
    }
}


function clearDeleted(e) {
    if (confirm("Warning!\nAre you sure want to clear Deleted Tasks List?")) {
        for (let k = deletedList.children.length; k > 0; k--) {
            deletedList.children[k - 1].remove();
        }
    }
}


function restoreDeletedTask(e) {
    const task = e.target.parentElement.parentElement.parentElement;
    taskContent = task.children[0].children[0].textContent;

    if (e.target.className === "material-symbols-outlined") {
        const restTask = document.createElement("li");
        restTask.className = "task-li";
        restTask.innerHTML = task.children[0].outerHTML;
        task.remove();
        e.preventDefault();
        const a = document.createElement("a");
        a.classList = "delete-task";
        a.setAttribute("href", "#");
        a.innerHTML = `<span class="material-symbols-outlined">close</span>`;
        const divDelete = document.createElement("div");
        divDelete.classList = "task-delete-box";
        divDelete.appendChild(a);
        restTask.appendChild(divDelete);
        taskList.appendChild(restTask);
    }

}







