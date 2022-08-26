
// Fare Etkinlikleri

const btnAdd = document.querySelector("#addButton");
const ul = document.querySelector("#task-list-ul");
/*
btnAdd.addEventListener("click", run);
ul.addEventListener("click", run);

btnAdd.addEventListener("dblclick", run);
ul.addEventListener("dblclick", run);

btnAdd.addEventListener("mousedown", run);      //Tıklayınca çalışır.
btnAdd.addEventListener("mouseup", run);        //Bırakınca çalışır.
*/
/*
btnAdd.addEventListener("mouseenter", run);     //Mouse üzerine geldiği an çalışır.
btnAdd.addEventListener("mouseleave", run);     //İmleç üzerinden gidince çalışır.
*/

//Alt elemanları olan objeler için mantıklıdır, elemanlar arasında gezinmeyi de mouseover ve mouseout olarak görür.
ul.addEventListener("mouseover", run);          
ul.addEventListener("mouseout", run);

btnAdd.addEventListener("mousemove", run);  //İmlecin, eleman üzerinde gezindiği her pikseli sayar. Genellikle görüntülerde kullanılır.


function run(event) {
    console.log(`event type: ${event.type}`);
}