const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    console.log(localStorage.getItem(TODOS_KEY));
}

function loadTodos() {
    const saveTodos = localStorage.getItem(TODOS_KEY);

    if (saveTodos) {
        const parsedToDos = JSON.parse(saveTodos);
        toDos = parsedToDos;

        // parsedToDos.forEach((item) => paintTodo(item));

        parsedToDos.forEach(paintTodo);

        // for (let i = 0; i < parsedToDos.length; i++) {
        //     paintTodo(parsedToDos[i]);
        // }
    }
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", function(event) {    
        const li = event.target.parentElement;
        li.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveTodos();
    });

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;

    toDoList.appendChild(li);    
}

toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
});

loadTodos();
