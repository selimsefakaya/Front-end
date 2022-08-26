
// Prototype Tabanlı Kalıtım

let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

let Teachers = function(name, yearOfBirth, job, subject) {
 
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}

// Inherit the Person prototype methods:
Teachers.prototype = Object.create(Person.prototype);

// set Teacher constructor:
Teachers.prototype.constructor = Teachers;
console.log(Teachers.prototype.constructor);

let Fatma = new Teachers("Fatma", 1999, "Teacher", "Form Master");

console.log(Fatma);
console.log(Fatma.name);
console.log(Fatma.subject);
console.log(Fatma.calculateAge());
