$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    ('#todoInput').keypress(function(event){
      if(event.which === 13) {
        createTodo();
      } 
    })
});

function addTodos(todos) {
    todos.forEach(function(todo){
    addTodo(todo);

    })
};

function addTodo(todo){
  let newTodo = $('<li class="task">' + todo.name + '</li>');
  if(todo.completed){
    newTodo.addClass("done");
  }
}
$('.list').append(newTodo);
function createTodo(){
  //send request to create new todo
  let userInput = $('#todoInput').val();
  $.post('/api/todos',{name:userInput})
  .then(function(newTodo){
    console.log(newTodo)
  })
}