
// Car
const carForm = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-cars");


// UI objesini başlatma
const ui = new UI();

// Storage objesini başlatma
const storage = new Storage();

// Tüm etkinlikleri yükleme
eventListeners();


function eventListeners() {
    form.addEventListener("submit", addCar);
    
    document.addEventListener("DOMContentLoaded", function(){
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    });

    cardBody2.addEventListener("click", deleteCar);

    clear.addEventListener("click", clearAllCars);
}


function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        ui.displayMessage("Tüm kutucukları doldurunuz.", "danger");
    }
    else {
        //Yeni aracın eklenmesi
        const newCar = new Car(title, price, url);

        ui.addCarToUI(newCar);      //arayüze araç ekleme

        storage.addCarToStorage(newCar);        // storage'a araç ekleme

        ui.displayMessage("Araç başarıyla eklendi.", "success");
        ui.clearInputs(titleElement, priceElement, urlElement);
    }
    e.preventDefault();
}


function deleteCar(e){
    if(e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);
        
        const carName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteCarFromStorage(carName);

        ui.displayMessage("Araç başarıyla silindi.", "success");
    }
    e.preventDefault();
}


function clearAllCars(e) {
    
    if(confirm("Tüm araçları silmek istediğinize emin misiniz?")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
        
        ui.displayMessage("Araçların tamamı listeden temizlendi.", "success");
    }

    e.preventDefault();
}