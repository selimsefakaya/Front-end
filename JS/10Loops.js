
// While Loop

let i = 6;

while (i < 11) {
    console.log(i);
    i++;
}


let x = 0;

while (x < 15) {
    console.log(x);
    if (x == 6) {
        break;
    }
    x++;
}


let a = 0

/*
while(a<10) {
    if (a==4){
        continue;   //4'e eşitlenince döngüyü başa alır. Sonsuz döngü denilebilr.
    }
    a++
}
*/


// Do While 

let k = 0;
do {
    console.log("do-while " + k);
    k++;
} while (k < 10)

// Önce do içindeki işlemleri gerçekleştirir. Daha sonra while koşulu sağlanıyorsa işlemleri yapmaya devam eder.
// Yani her halükarda döngü en az bir kere çalışmış olur.


// For

for (let c = 0; c < 10; c++) {
    console.log("for " + c);
}


for (let m = 0; m < 10; m++) {

    if (m == 3) {
        console.log("continue: " + m);
        continue;
    }
    else if (m == 8) {
        console.log("break: " + m);
        break;
    }
    console.log(m);
}


let result = 1;

for (let t = 1; t < 10; t++) {
    result *= t;
}
console.log(result);


/*************************************/

// Usage of loops on arrays and objects

let cities = ["Antalya", "Ankara", "İstanbul", "Muğla", "Samsun"];

// For with arrays

for (let c = 0; c < cities.length; c++) {
    console.log(c + 1 + ": " + cities[c]);
}


// For-in Method

for (let i in cities) {
    console.log(`index: ${i} -> ${cities[i]}`);
}


// For each Method

cities.forEach(function (item) {
    console.log(item);
}
)


// For with Objects

let user = [
    { firstName: "Sefa", lastName: "Kaya" },
    { firstName: "Selim", lastName: "Sefa" },
    { firstName: "Sefa", lastName: "Selim" },
    { firstName: "Selim", lastName: "Kaya" }
]

for (let i = 0; i < user.length; i++) {
    console.log("User " + i + ": " + user[i].firstName + " " + user[i].lastName);
}


for (let i in user) {
    console.log(`index: ${i} -> ${user[i].firstName}`)
}


// Map: returns an array

let data = user.map(function(item){
    return item.firstName + " " + item.lastName;
}
)

console.log(data);  // obje içinden çekerek bir array oluşturdu.


let numbers = [1,3,4,5,7,9,15];
let num= numbers.map(function(n){
    return n*n;
})

console.log(num);