
// Klavye Etkinlikleri

const task = document.getElementById("taskName");
const li = document.getElementById("task-list-ul");

task.addEventListener("focus",run);
task.addEventListener("blur", run);

task.addEventListener("paste", run);        // Yapıştırma işlemi yapıldığında çalışır.
task.addEventListener("copy", run);         // Kopyalama işlemi yapıldığında çalışır.
task.addEventListener("cut", run);          // Kesme işlemi yapıldığında çalışır.

task.addEventListener("select", run);       // Bir seçme işlemi yapılınca çalışır.

task.addEventListener("keydown", run);      // Herhangibir tuşa basınca çalışır.
task.addEventListener("keyup", run);        // Tuş bırakılınca çalışır.
// * keyup metodu çalıştığında input içinde yazılan değer çekilebilir. 





function run(e){
    console.log(e.type);
    console.log(e.target.value);
}





