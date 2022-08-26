
// Strings

const firstName = "Sefa";
const lastName = "Kaya";
const age = "25";
let hobbies = "Software, Theatre, Cinema, Volleyball"

let data;

// String birleştirme

data = firstName + " " + lastName;
data = "Sefa";
data += " Kaya";
data = 'Hello, my name is ' + firstName + ' ' + lastName + '. I\'m ' + age + ' years old.';
// \' 
data = firstName.concat(" ", lastName);
data = data.toUpperCase();
data = data.toLowerCase();
//data = data.substring(1,4);     //efa
//data = data.slice(1,4);         //efa
//data = data.indexOf("t");       //-1 verir.
//data = data.indexOf("f");       //2. indexte f var.
data = data.replace("sefa", "Selim");   //birebiir aynı kelime yazılmalıdır.
//data = data.length;
data = hobbies.split(", ")


console.log(data);
console.log(typeof data);