let inputValue = document.querySelector("#enterTask");
let button = document.querySelector("#pushTask");
let task = document.querySelector("#taskArea") ;
let deleteTaskButton = document.querySelectorAll(".delete");

    console.log(deleteTaskButton);

button.addEventListener("click", addTask);

function addTask() {
    let value = inputValue.value;
    if (value !== "") {
        task.innerHTML +=        
        "<div class='taskBlock'> <div class='task standardSize'>" + value + "</div>     <button class='delete' data-action='delete'> <img src='free-icon-recycle-bin-3156999.png' alt='Delete'></button>  </div>";
        inputValue.value = "";
    } else {
        return;
    }
}

task.addEventListener("click", deleteTask);

function deleteTask(event) {
    console.log(event.target);

    if (event.target.dataset.action === 'delete'){
        event.target.parentNode.remove();
    }
    
}


