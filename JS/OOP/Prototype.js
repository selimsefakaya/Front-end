
// Prototype

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

let Sefa = new Person("Sefa", 1997, "Front-end Developer");
let Selim = new Person("Selim", 2006, "Student");

Person.prototype.getName = function(){
    return this.name;
}


console.log(Sefa.getName());
console.log(Sefa.calculateAge());
console.log("---------------");
console.log(Selim.getName());
console.log(Selim.calculateAge());









// const divSefa = document.createElement("div");
// const h4Name = document.createElement("h4");
// h4Name.innerHTML = Sefa.name
// divSefa.appendChild(h4Name);
// divSefa.className = "divi"
// divSefa.style = {
//     color: "blue",
//     position: "absolute",
//     top: "50px",
//     left: "20px"
// }
// h4Name.style.margin = "10px 5px"
// const divi = document.querySelector(".divi");
// divi.appendChild(divSefa)
