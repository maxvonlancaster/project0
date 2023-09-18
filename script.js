const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let i = 0;
let list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let newToDoElement = document.createElement("div");
  newToDoElement.id = "todo-"+i;
  let delButton = document.createElement("button");
  delButton.id = i;
  delButton.textContent = "delete me"
  delButton.addEventListener("click", deleteToDo.bind(this, i) );
  newToDoElement.textContent = "new todo";
  newToDoElement.appendChild(delButton);

  list.appendChild(newToDoElement);
  i++;
}

function deleteToDo(j){
  let toDo = document.getElementById("todo-"+j);
  list.removeChild(toDo);
}