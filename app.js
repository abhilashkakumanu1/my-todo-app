let dateElement = document.querySelector(".date");
let todosElement = document.querySelector(".todos");
let formElement = document.querySelector(".add-todo-container");
let addTodoInputElement = document.querySelector(".add-todo-input");
let addTodoDateElement = document.querySelector(".add-todo-date");

let selectPersonElement = document.querySelector(".select-person");

let todos = [];
let todo;


// Formatting date
const date = new Date().toDateString();
dateElement.innerText = `${date.slice(0,3)}, ${date.slice(4, 10)}, ${date.slice(10)}`;

// rendering todos on screen for the first time
function render(){
    todosElement.innerHTML = "";
    if(todos.length!==0){
        todos.forEach((todo, index) => {
            todosElement.innerHTML+=generateHTML(todo, index);
        });
    }
}
render();

// function definitions
function generateHTML(todo, index){
    
    if(todo.completed){
        return(`<div class="todo-item-${index}">
                <input type="checkbox" class="todo-checkbox" checked>
                <span class="todo-span">${todo.description} ${todo.duration? "for "+todo.duration+" hrs":""}</span>
                <i class="fas fa-times-circle todo-cross"></i>       
            </div>`); 
    } else{
        return(`<div class="todo-item-${index}">
                <input type="checkbox" class="todo-checkbox">
                <span class="todo-span">${todo.description} ${todo.duration? "for "+todo.duration+" hrs":""}</span>
                <i class="fas fa-times-circle todo-cross"></i>       
            </div>`); 
    }
          
}

function addTodo(){
    if(addTodoInputElement.value.trim()){
        let description = addTodoInputElement.value.trim();
        let duration = addTodoDateElement.value.trim()
        todo = {
            description,
            duration,
            completed: false
        };
        //Adding to the todos array
        todos.push(todo);
        render();

        //Clearing the input box after adding
        addTodoInputElement.value = "";
        addTodoDateElement.value = "";
    }
}

//deleting from todos and rendering
function deleteTodo(todoElement){
    var id = parseInt(todoElement.className[todoElement.className.length-1]);
    todos.splice(id, 1);
    render();
}

//Toggling checbox
function toggleCheckbox(checkboxElement, todoElement){
    var id = parseInt(todoElement.className[todoElement.className.length-1]);
    todos[id].completed = checkboxElement.checked;
}

// Event listeners
formElement.addEventListener("submit", event =>{
    event.preventDefault();
    addTodo();
});


todosElement.addEventListener("click", function(event){
    // Clicked on cross
    if(event.target.classList.contains("todo-cross")){
        deleteTodo(event.target.parentNode)
    }

    //Toggle checkbox
    if(event.target.classList.contains("todo-checkbox")){
        toggleCheckbox(event.target, event.target.parentNode);
    }
})

//Select person
selectPersonElement.addEventListener("click", ()=>{
    document.body.classList.toggle("abhi");
    console.log(selectPersonElement.innerText);
    if(selectPersonElement.innerText==="Jo"){
        selectPersonElement.innerText = "Abhi";
    } else{
        selectPersonElement.innerText="Jo";
    }
})