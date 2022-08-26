
// Tarayıcı Depolama Alanları

// * Session storage, sitede oturum açıldığında kapatılana kadar saklı tutar. Kapatılınca veriler yok olur.
// * Local storage, bilgiler kalıcı olarak tutulur. Ta ki javascripte silinene kadar.
// İşleyişleri hemen hemen aynıdır.

// ctrl-shift-c ile konsol açılır. elements-console-sources...-application-.. application sekmesinde storage açılır.

/*
// Session Storage

const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

add.addEventListener("click", addItem);

del.addEventListener("click", deleteItem);

clear.addEventListener("click", clearItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItem(e) {
    sessionStorage.clear();
}

// Sayfa kapatılınca bilgiler silinir.
*/


// Local Storage

// Veri eklemek:
localStorage.setItem("programming", "javascript");
localStorage.setItem("computer", 9000);      //str veya int olsun string kaydedilir.

// Kayıtlı veriye ulaşmak:
/*
const value = localStorage.getItem("programming");
console.log(value);
const tValue = localStorage.getItem("computer");
console.log(typeof tValue)

// Temizlemek:
// localStorage.clear();
*/

// Veri bulunup bulunmadığını sorgulamak:
console.log(localStorage.getItem("keyboard"));      //null
if (localStorage.getItem("computer") === null){
    console.log("The queried data could not be found.");
}
else {
    console.log("The queried data found.")
}