
// Functions 

function HelloTest() {
    console.log("Hello!");
}

HelloTest();


function Hello(name,age){
    console.log("Name: " + name + "\nAge: " + age )
}

Hello("Sefa",25);


function calculateAge(birthYear) {
    let nowYear = new Date().getFullYear();
    age = nowYear - birthYear;
    return age;
}

let ageSefa = calculateAge(1997);
Hello("Sefa", ageSefa)


function DrivingLicense(birthYear,name){
    let age = calculateAge(birthYear);
    
    if (age >= 18) {
        console.log("Your age is appropriate for the driver's license, " + name + ".");
    }
    else {
        console.log("You are not age appropriate for a driver's license, " + name + ". You can get it after " + (18-age) + " years.");
    }
}   

DrivingLicense(1997,"Sefa")