const todoList = [];
const todoList1 = ['wash'];
renderTodoList();

function renderTodoList(){
  let todoListHTML='';

  for(let i=0; i<todoList1.length; i++){
    const todoElement= todoList1[i];
    const html = `<p>${todoElement}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function todoListFun(){
  const inputElement = document.querySelector('.js-input');
  const val = inputElement.value;

  todoList.push(val);
  console.log(todoList);

  inputElement.value = '';

  //renderTodoList();
}


function todoListFun1(){
  const inputElement = document.querySelector('.js-input-val');
  const val = inputElement.value;

  todoList1.push(val);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

