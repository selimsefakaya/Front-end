
// Event Listener ve Event Objesi

const btnDeleteAll = document.querySelector('#btn-delete-all');

btnDeleteAll.addEventListener("click", function(){
    console.log("clicked the button.");
})

// fonksiyon dışarıda oluşturulup da kullanılabilir.

btnDeleteAll.addEventListener("click", clickDeleteAll);

const btnAdd = document.querySelector("#addButton");
btnAdd.addEventListener("click", clickDeleteAll);       //Dışarıda oluşturulan fonksiyon, farklı yerlerde de kullanılabilir.


function clickDeleteAll() {
    console.log("clicked the button.")
}

/* Butona tıklayınca sayfa yenilenmesin: */

btnDeleteAll.addEventListener("click", function(a) {
    
    let value;
    value = a;
    value = a.target;       //Hangi butona tıklandığını gösterir.
    value = a.target.id     //Tıklanan butonun id'sini gösterir.
    value = a.target.classList
    value = a.type;         //Tipini gösterir.""

    a.preventDefault();
    console.log(value);

})