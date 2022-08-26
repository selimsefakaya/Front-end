
// Scope (Kapsam)

// Oluşturulan değişkenin nerelerde geçerli olduğunu belirtir.

// 1. Global Scope

var data1 = 5;      //global
let data2 = 10;
const data3 = 20;


// 2. Function Scope

function a() {
    //Function scope
}


// 3. Block Scope

if (true) {
    //Block scope
}


/********************************/

function functionTest() {
    var data1 = 50;
    let data2 = 40;
    const data3 = 90;

    console.log("function scope: " + data1, data2, data3);
}

functionTest();     //Function scope çalıştı.

if (true) {
    var data1 = 30;
    let data2 = 60;
    const data3 = 50;

    console.log("block scope: " + data1, data2, data3);
}

console.log("global scope: " + data1, data2, data3); //Global scope çalıştı.

// data1 değişti, var ile tanımlandığı için global oluyor


/**********************************/

if (true) {
    var a = 10;
    let b = 30;
    const c = 3;
}

// console.log(a);
// console.log(b);
// console.log(c);
//a'yı yazdırır, b ve c için tanımlı değil uyarısı verir.

//Block içinde var, global olur; let ve const, block dışında tanımsız olur.


/*********************************/

var adminPassword = "1234567";

if (1) {
    var adminPassword = "234567";   //Password değişti.
}

// Bir değerin daha sonra global dışı bir hareket ile değiştirilmesi istenmiyorsa bu sorunu engelleyebilmek için let veya const ile tanımlanmalıdır.
