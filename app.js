const listTask  = document.querySelector('.list ul');
const button    = document.querySelector('.button');
const taskNbr   = document.querySelector('.todoNbr h3 b');
const todoInput = document.querySelector(".inputText");
const task      = listTask.children;

button.addEventListener('click',function(e){
    e.preventDefault();
    const newTask = document.createElement('li');
    newTask.innerHTML = '<button class="x">X</button><button class="done">DONE</button>' + todoInput.value;
    listTask.append(newTask);
    taskNbr.innerText = task.length;
    todoInput.value = "";
    newTask.children[0].addEventListener('click', function (e){
        e.path[1].remove();
    });
    newTask.children[1].addEventListener('click', function (e){
        e.path[0].classList.toggle("taskDone");
        e.target.classList.toggle("taskNotYet");
        const text = e.target;
        const curText = "DONE";
        if(this.innerText == curText){
            text.innerText = "Not Done Yet ! ";
        }
        else{
            text.innerText = curText;
        }
    });
});





