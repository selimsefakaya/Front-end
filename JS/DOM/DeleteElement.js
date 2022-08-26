
// Element Silme

const taskList = document.querySelector("#task-list-ul");

// taskList.remove();      //tamamen siler.
// taskList.childNodes[5].remove();      //text olarak gelen node'ları da hesaba katmak gerekli.
// taskList.children[2].remove();
taskList.removeChild(taskList.children[3]);

// Attribute silme

// taskList.children[0].removeAttribute("class");

for(let i=0; i<taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class");
    taskList.children[i].removeAttribute("id");
}



console.log(taskList)