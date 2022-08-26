
// Immediate Functions

// Bazen oluşturulan fonksiyonların yalnızca bir kez çalıştırılması istenir.
// Mesela siteye girince hoşgeldin mesajı oluşturmak.

function welcome(){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var message = "Welcome! Today is " + days[today.getDay()] + ". You can visit the website everyday. :)";
    return message;
}

console.log(welcome());

// (function(){
// }());

// (function(){
// })();

(function(name){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var message = "Welcome "+ name+ "! Today is " + days[today.getDay()] + ". You can visit the website everyday. :)";
    console.log(message);
    alert("sdfgjd")
    
}("Sefa")); //Parantezde parametre verilebilir.
