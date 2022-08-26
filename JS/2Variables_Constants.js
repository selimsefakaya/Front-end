var password; 
console.log(password)

password = "password123"
console.log(password)   //Beyaz renkte görünür.

age = 25;
console.log(age)    //Mor renkte görünür.

/*******************************************************/

/* Değişken Tanımlama Kuralları */

// - Değişken ismi rakamla başlayamaz. 1_age olmaz age_1 olur.

// - Kullanılan komut syntaxları değişken olarak kullanılamaz.

// - Değişken ismi birden fazla kelime olamaz. adSoyad, ad_soyad AdSoyad vs. olur.

// - Değişken ismi türkçe karakter alamaz.

/* Değişken tanımlanır:
var email;
email = "sefakayatr@gmail.com"
console.log(email)
*/

// Sabit tanımlanır:
const email = "sefakayatr@gmail.com"
console.log(email)
// email = "kayase15@itu.edu.tr"   //"Sabittir, değiştirilemez" hatası verir.

/*******************************************************/

/* Değişken Türleri */

/* Primitive Types */

// String

let firstName = "Sefa";
console.log(typeof firstName)   //Tipini yazdırır.

// Number

let birthYear = 1997;
console.log(typeof birthYear)
console.log(typeof typeof birthYear)

// Boolean

let isWork = false;
console.log(typeof isWork)

// undefined

let phone;
console.log(typeof phone)

// Reference Types : Objects

let list = ["Selim", "Sefa", "Kaya"]    //Array tanımı
console.log(list)
console.log(typeof list)

let address = {
    city: "Antalya",
    country: "Turkey",
}
console.log(address)
console.log(typeof address)

//Function Type

var calculate = function(){
    return 0;
}
console.log(calculate)
console.log(typeof calculate)

