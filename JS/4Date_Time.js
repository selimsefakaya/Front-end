
// Date Object

let time = new Date();

console.log(time);
console.log(typeof time);


// Set Methods

time.setMonth(10);
time.setDate(25);
time.setFullYear(2036);
time.setHours(20);

console.log(time);


// Get Methods: Sistemin tarihini alır.

console.log(time.getMonth());   //Ocak  ayı 0, Temmuz 6
console.log(time.getDate());
console.log(time.getFullYear());
console.log(time.getDay());     //Pazar 0, Salı 2 
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());


// Birthday

let now = new Date();
let birthDay = new Date(1997,0,19,10,20,30);
console.log(birthDay)

console.log(now.getFullYear()-birthDay.getFullYear());
console.log(now.getMonth()-birthDay.getMonth())
