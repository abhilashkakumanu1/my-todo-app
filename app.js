let dateElement = document.querySelector(".date");
let todosElement = document.querySelector(".todos");
let addTodoInputElement = document.querySelector(".add-todo-input");
let addTodoButtonElement = document.querySelector(".add-todo-button");
let checkboxElement;

// Formatting date
const date = new Date().toDateString();
dateElement.innerText = `${date.slice(0,3)}, ${date.slice(4, 10)}, ${date.slice(10)}`;


let todos = [];
let todo = {
    description: "Code wars for 2 hours",
    duration: "2 hours",
    completed: false
};
todos.push(todo);

// Event handler functions

function toggleCheckbox(checkboxElement){
    if(checkboxElement.checked){
        checkboxElement.checked = false;
    } else{
        checkboxElement.checked = true;
    }
}

function addTodo(){
    if(addTodoInputElement.value.trim()){
        todos.push({
            description: addTodoInputElement.value.trim(),
            completed: false
        })

        addTodoInputElement.value = "";
    }
}

addTodoInputElement.addEventListener("keydown", event =>{
    if(event.keyCode === 13){
        addTodo();
        render();
    }
})
addTodoButtonElement.addEventListener("onClick", ()=>{
        addTodo();
        render();
})

// rendering todos on screen
function render(){
    todosElement.innerHTML = "";

    if(todos){
        todosElement.innerHTML = "<div class='todos-heading'>ToDos</div>";
        todos.forEach((todo, index) => {
            if(todo.completed){
                todosElement.innerHTML+=`<div class="todo-item completed">
                                        <input type="checkbox" id="todo-item-${index}" checked>
                                        <label for="todo-item-${index}">${todo.description}</label>        
                                    </div>`
            } else{
                todosElement.innerHTML+=`<div class="todo-item">
                                        <input type="checkbox" id="todo-item-${index}">
                                        <label for="todo-item-${index}">${todo.description}</label>        
                                    </div>`
            }

            // Adding event listener to dynamically created elements - I didn't know that we cant directly add event listeners to dynamically created elements
            
            checkboxElement = document.querySelector(`#todo-item-${index}`);
            checkboxElement.addEventListener("onClick", ()=>{
                toggleCheckbox(checkboxElement);
            })
            
        })
    }  
}
render();