$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
});

function addTodos(todos) {
    todos.forEach(function(todo){
      let newTodo = $('<li class="task">' + todo.name + '</li>');
      $('.list').append(newTodo);
    })
}