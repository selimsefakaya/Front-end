
// Object.create

let personProto = {
    calculateAge : function() {
        return 2022 - this.yearOfBirth;
    },
    getName : function() {
        return this.name;
    },
    getJob : function() {
        return this.job;
    }
}

let sefa = Object.create(personProto);
sefa.name = "sefa";
sefa.yearOfBirth = 1997;
sefa.job = "Front-End Developer";

let selim = Object.create(personProto,{
    name: {value: "selim"},
    yearOfBirth: {value: 2008},
    job: {value: "Engineer"}
});

console.log(sefa.getName());
console.log(sefa.getJob());
console.log(sefa.calculateAge());
console.log("-------------");
console.log(selim.getName());
console.log(selim.getJob());
console.log(selim.calculateAge());