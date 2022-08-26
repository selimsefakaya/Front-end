
function Storage() {
    //Etkinliği yok. Prototype yardımıyla eklemeler yapılır.
}


Storage.prototype.addCarToStorage = function(newCar) {
    let cars = this.getCarsFromStorage();
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
}


Storage.prototype.getCarsFromStorage = function() {
    let cars;
    
    if (localStorage.getItem("cars") === null) {
        cars = [];
    }
    else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    return cars;
}


Storage.prototype.deleteCarFromStorage = function(carName) {
    let cars = this.getCarsFromStorage();
    cars.forEach(function(car,index){
        if (car.title === carName) {
            cars.splice(index,1);
        }
    });
    localStorage.setItem("cars", JSON.stringify(cars));
}


Storage.prototype.clearAllCarsFromStorage = function() {
    localStorage.removeItem("cars");
}