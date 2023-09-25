const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let i = 0;
let list = $("#todo-list");
const itemCountSpan = $("#item-count")
const uncheckedCountSpan = $("#unchecked-count");

function newTodo() {
  let newToDoElement = $("<div></div>");
  newToDoElement.attr("id", "todo-"+i);
  let delButton = $("<button></button>");
  delButton.attr("id", i);
  delButton.text("delete me");
  delButton.click(deleteToDo.bind(this, i))
  newToDoElement.text("new todo");
  newToDoElement.append(delButton);

  list.append(newToDoElement);
  i++;
}

function deleteToDo(j){
  let toDo = $("#todo-"+j);
  toDo.remove();
}