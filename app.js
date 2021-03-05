const listTask  = document.querySelector('.list ul');
const button    = document.querySelector('.button');
const todoInput = document.querySelector(".inputText");

//LOAD TASK STORED IN LOCAL
document.addEventListener("DOMContentLoaded", getTodos);

// Button to add to each TASK
const buttons     = document.createElement('div');
buttons.innerHTML = '<button class="doneBtn"><i class="fas fa-check-square"></i></button><button class="removeBtn"><i class="far fa-trash-alt"></i></button>';
buttons.classList.add('buttons');

//ADD NEW TASK
button.addEventListener('click',function(e){
    e.preventDefault();

    const newTask = document.createElement('li');
    const text    = document.createElement('p');

    text.innerHTML    = todoInput.value;
    newTask.innerHTML = text.outerHTML + buttons.outerHTML;

    saveLocalTodos(todoInput.value);

    listTask.append(newTask);
    todoInput.value = "";
});

//DELETE A TASK
listTask.addEventListener('click', function (e){
    const item = e.target;
    const text = item.parentElement.parentElement.children[0].innerText;
    if(item.classList == 'removeBtn'){
        item.parentElement.parentElement.remove();
        removeLocalTodos(text);
    }
});

//SWITCH BETWEEN DONE AND UNDONE TASK
listTask.addEventListener('click', function (e){
    const item = e.target;
    const text = item.parentElement.parentElement.children[0];
    
    if (item.classList.contains("doneBtn")){
        item.classList.toggle("notYetBtn");
        text.classList.toggle("taskDone");
    }
});

//LOCAL STORAGE
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } 
    else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    }
    else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(todos.indexOf(todo));
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
  
function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } 
    else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {

    // Button to add to each TASK
    const buttons     = document.createElement('div');
    buttons.innerHTML = '<button class="doneBtn"><i class="fas fa-check-square"></i></button><button class="removeBtn"><i class="far fa-trash-alt"></i></button>';
    buttons.classList.add('buttons');

    //ADD NEW TASK
    const newTask = document.createElement('li');
    const text    = document.createElement('p');

    text.innerHTML    = todo;
    newTask.innerHTML = text.outerHTML + buttons.outerHTML;

    listTask.append(newTask);
    });
}





