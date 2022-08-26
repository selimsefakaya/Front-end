
// if else

const firstName = "Ross";
const userName = "rossgeller";
const age = 33;
const isStudent = 1;
const school = "university";
let id = 345734;

if (userName == "rossgeller") {
    console.log("Hello Ross!");
}
else {
    console.log("What Ross???");
}

if (age === 34) {
    console.log("You are 34 years old.");
}

if (isStudent) {
    console.log("School: " + school);
}
else {
    console.log("What is your job?");
}

if (age >= 18) {
    console.log("You're an adult.")
}
else {
    console.log("You're a child still.")
}

if (typeof id != "undefined") {
    console.log("id: " + id)
}
else {
    console.log("no id.")
}




// Switch

let operation = 6;

switch (operation) {
    case 1:
        console.log("Operation 1 is done.");
        break;
    case 2:
        console.log("Operation 2 is done.");
        break;
    case 3:
        console.log("Operation 3 is done.");
        break;
    case 4:
        console.log("Operation 4 is done.");
        break;

    default:
        console.log("Operation is not defined.")
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log(day);


let hour = new Date().getHours();

switch (true) {
    case (hour>=5 && hour<=11):
        console.log("Good Morning!");
        break;
    case (hour>=12 && hour <=17 ):
        console.log("Good afternoon!");
        break;
    case (hour>=18 && hour<=21):
        console.log("Good evening!");
        break;
    case((hour>=0 && hour<=4) || (hour>=22 && hour<=24)):
        console.log("Good night!");
        break;
    default:
        console.log("Wrong time!");
}
