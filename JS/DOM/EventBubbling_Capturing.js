
// addEventListener metodunda üç parametre girilir. Sona true-false girilebilir. 
// Girilmediği takdirde default olarak false kabul edilir. False olursa Event Bubbling;
// True olursa Event Capturing durumu gerçekleşir.


// Event Bubbling (Olay kabarcıklanması, üst sınıflara doğru olaydan etkilenme)

// const form = document.querySelector("form");
// const addTaskBody = document.querySelector(".add-task-b");
// const addTask = document.querySelector(".add-task");
// const container = document.querySelector("#content");


// form.addEventListener("click", function(e){
//     console.log("form");
// })

// addTaskBody.addEventListener("click", function(){
//     console.log("addTaskBody");
//     e.stopPropagation();            // tıklamanın üst sınıfa çıkmasını engeller.
// })

// addTask.addEventListener("click", function(e){
//     console.log("addTask");
//     e.stopPropagation();            // üst sınıfa çıkmayı engeller.
// })

// container.addEventListener("click", function(){
//     console.log("content");
// })

// Genellikle istenilmeyen bir durumdur. stopPropagation() ile önüne geçilir.


// Event Capturing (Dıştan içe doğru tetiklenme, bubbling tersi)

const form = document.querySelector("form");
const addTaskBody = document.querySelector(".add-task-b");
const addTask = document.querySelector(".add-task");
const container = document.querySelector("#content");


// form.addEventListener("click", function(e){
//     console.log("form");
//     e.stopPropagation();            // alt sınıfa geçişi engeller, ancak en üst elemanı varsayar. istenilen bu değil.
// }, true);

// addTaskBody.addEventListener("click", function(){
//     console.log("addTaskBody");

// }, true);

// addTask.addEventListener("click", function(e){
//     console.log("addTask");
// }, true);

// container.addEventListener("click", function(){
//     console.log("content");
// }, true);



/************/

// const deleteItem = document.querySelectorAll(".delete-task");

// deleteItem.forEach(function(item) {
//     item.addEventListener("click", function(e){
//         console.log(e.target);
//     })
// })

// Silme butonlarına event ekleme

const ul = document.querySelector("ul");
ul.addEventListener("click", function(e){
    if (e.target.className === "material-symbols-outlined") {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})