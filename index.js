let inputValue = document.querySelector("#enterTask");
let button = document.querySelector("#pushTask");
let task = document.querySelector("#taskArea") ;
let deleteTaskButton = document.querySelectorAll(".delete");

    console.log(deleteTaskButton);

button.addEventListener("click", addTask);
task.addEventListener("click", deleteTask);

function addTask() {
    let value = inputValue.value;
    if (value !== "") {
        task.innerHTML +=        
        "<div class='taskBlock'> <div class='task standardSize'>" + value + "</div> <button class='completeTask' data-action='complete'> <img src='free-icon-foursquare-check-in-7794196.png' alt='Complete'> </button>      <button class='delete' data-action='delete'> <img src='free-icon-recycle-bin-3156999.png' alt='Delete'></button>  </div>";
        inputValue.value = "";
    } else {
        return;
    }
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete'){
        let parentNode = event.target.closest(".taskBlock");
        parentNode.remove();
    }
}

function completeTask(event) {
    if (event.target.dataset.action === 'complete'){
        console.log(event.target.closest(".completeTask"));
    }
}


