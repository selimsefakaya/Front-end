
// Arrays

let names = ["Elvis", "Maria", "John", "Rachel"];
let ages = [34, 68, 24, 32];
let person = ["sefa", "kaya", 25, null, undefined, ["software", "music", "cinema"]];



console.log(names);
console.log(ages);
console.log(person);
console.log(names.length);
console.log(typeof names);


// Get Array Items

console.log(names[2]);


// Set Array Items

names[2] = "Joey";
names[5] = "Ross"       //son index 3 olduğu için 4'e empty ekler.
names[names.length] = "Monica"


// Add Item

names.push("Chandler");
names.unshift("Phoebe");    //dizinin başına ekler.


// Remove Item

names.pop();        //sonuncuyu siler.
names.shift();      //ilkini siler.



console.log(names);


// indexOf

let index = names.indexOf("sefa");
console.log("index: " + index);


// reverse

names.reverse();        //tersten sıralar
console.log(names);


// sort

names.sort();
ages.sort();
person.sort();
console.log(names);
console.log(ages);
console.log(person);
// Büyük, küçük harfler önemlidir.


// concat

let data = names.concat(ages);
console.log(data);


// splice

names.splice(2, 0, "Frank");        //hiç eleman silmeden 2.indexe ekler.
names.splice(3, 2, "Richard", "Hugo", "Georges")       //3.indexten itibaren 2 elemanı sil ve 3. indexten itibaren ekle.

console.log(names);
