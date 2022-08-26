
// Primitive yapıların (number, string, boolean, undefined, null) dışında kalan her şey obje olarak tanımlanabilir.


// let sefa = {
//     name: "Sefa",
//     yearOfBirth: 1997,
//     job: "Engineer",
// }

// val = sefa;
// console.log(val);           //objeyi konsolda görebiliriz.
// console.log(typeof val);    //objenin tipi




//Constructor oluşturma

function Employees(firstName, surName, dateOfStart, job) {
    this.firstName = firstName;
    this.surName = surName;
    this.dateOfStart = dateOfStart;
    this.job = job;

    // console.log(this);
    this.calculateSeniority = function(){
        return 2022-this.dateOfStart;
    }
}


let Sefa = new Employees("Sefa", "Kaya", 2022, "Front-end Developer");
let Selim = new Employees("Selim", "Kaya", 2021, "Engineer");

console.log(Sefa.job);
console.log(Selim.dateOfStart);
console.log(Selim.calculateSeniority())



let Student = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2022-yearOfBirth;
    }
    console.log(this);
}

let Aylin = new Student("Aylin", 1999, "Student");

console.log(Aylin.yearOfBirth);
console.log(Aylin.calculateAge());