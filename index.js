let inputValue = document.querySelector("#enterTask");
let button = document.querySelector("#pushTask");
let task = document.querySelector("#taskArea") ;

// inputValue.addEventListener("keyup", addTaskEnter);
button.addEventListener("click", addTask);
task.addEventListener("click", deleteTask);
task.addEventListener("click", completeTask);

if (localStorage.getItem("tasksHTML")) {
    task.innerHTML = localStorage.getItem("tasksHTML");
}

// function addTaskEnter(e) {
//     if (e.key === "Enter" || e.keyCode === 229) {
//         addTask();
//     };

//     saveHTMLtoLS();
// }

function addTask() {
    let value = inputValue.value;
    if (value !== "") {
        task.innerHTML +=        
        "<div class='taskBlock'> <div class='task standardSize'>" + value + "</div> <button class='completeTask' data-action='complete'> <img src='free-icon-foursquare-check-in-7794196.png' alt='Complete'> </button>      <button class='delete' data-action='delete'> <img src='free-icon-recycle-bin-3156999.png' alt='Delete'></button>  </div>";
        inputValue.value = "";
    } else {
        return;
    }

    saveHTMLtoLS();
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete'){
        let parentNode = event.target.closest(".taskBlock");
        parentNode.remove();
    }

    saveHTMLtoLS();
}

function completeTask(event) {
    if (event.target.dataset.action === 'complete'){
        let completeTask = event.target.closest(".taskBlock").querySelector(".task");
        let taskClasses = completeTask.classList;
        let active = true;

        for (let i = 0; i < taskClasses.length; i++) {
            const taskClass = taskClasses[i];

            if (taskClass === "completeTaskActive") 
            {
                active = false;
                break;
            }
        }

        if (active === true) {
            taskClasses.add("completeTaskActive");
        }

        if (active === false) {
            taskClasses.remove("completeTaskActive");
        }
    }

    saveHTMLtoLS();
}

function saveHTMLtoLS() {
    localStorage.setItem("tasksHTML", task.innerHTML);

}

