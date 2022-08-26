

// ***************Elementlerin Seçilmesi***************

// --Tek Element Seçimi--

let data; 

data = document.getElementById("header");
data = document.getElementById("header").id;
data = document.getElementById("header").className;


data = document.getElementById("header");
data = data.id;
data = data.className;


/*Elementin stilini değiştirme*/

data = document.getElementById("header-title");
data.style.color = "red";
data.style.fontSize = "45px";
data.style.fontWeight = "600";
// console.log(data);

document.getElementById("header-title").innerText = "TODO LIST";
document.getElementById("header-title").innerText = "<b>ToDO List</b>"
document.getElementById("header-title").innerHTML = "<b>ToDO List</b>"

/*********/

// console.log(document.querySelector("#header-title"));
// console.log(document.querySelector(".add-task-h"));
// console.log(document.querySelector("div"));
document.querySelector("li").style.color = "blue";      //ilk elemanı değiştirdi.
document.querySelector("li:last-child").style.color = "green";      //son elemanı değiştirdi.
document.querySelector("li:nth-child(2)").style.color = "purple";   //2. elemanı değiştirdi.
document.querySelector("li:nth-child(4)").className = "task-li task-li-last"   //class değiştirildi.
document.querySelector("li").classList.add("first-task");



// --Çoklu Element Seçimi--

let Data;

Data = document.getElementsByClassName("task-li");
// Data = document.getElementsByClassName("task-li")[0];
// Data = Data[3];
// Data[3].style = "border: 5px solid red; padding: 7px 15px; color:red;"
// Data[3].textContent = "Last Item";      //div içi sadece last item oldu.

//Icerik değiştirme;
let textTask;
textTask = document.getElementsByClassName("task-box");

/* Tek tek değiştirme
textTask = textTask[2];
textTask.innerHTML = "<h4> 3rd Task </h4>";
*/

/* Çoklu değiştirme
for (let i=0; i<textTask.length; i++) {
    textTask[i].innerHTML = "<h4> New Task </h4>";
    textTask[i].style = "color: darkorange;"
}
*/

/************/

Data = document.getElementsByTagName("li");
Data = document.getElementsByTagName("a");
// ul içindeki a'ları seçmek için;
Data = document.getElementById("task-list-ul").getElementsByTagName("a");


/************/

Data = document.querySelectorAll("li");     //ForEach kullanılabilir; for'a gerek kalmadı.

let taskContent;
taskContent = document.getElementById("task-list-ul");

Data.forEach(function(item, index){
    
    item.textContent = `${index+1} - item`;
    
    console.log(item);
})


console.log(textTask);
console.log(Data);