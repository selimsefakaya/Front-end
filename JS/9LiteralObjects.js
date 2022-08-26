
// Object Literals

// let firstName = "Sefa";
// let lastName = "Kaya";
// let firstName = "Selim";
// let lastName = "Sefa";

// let f000000n = ["Sefa", "Kaya", 25];
// let f000001n = ["Selim", "Sefa", 26];


let data;

let user = {
    username : "skaya",
    firstName : "Sefa",
    lastName : "Kaya",
    age : 25,
    hobbies : ["music", "web programming", "design", "cinema"],
    address : {
        city: "Antalya",
        country: "Turkey",
        phone : "05458072677",
        email : "sefakayatr@gmail.com"
    }
}

data = user;
data = user.firstName;
data = user.hobbies.length;
data = user.address.city;

console.log(data);
console.log(typeof user);