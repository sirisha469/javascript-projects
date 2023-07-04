//array of objects
const todoList=[
  {
    name:'wash',
    dueDate:'2023-6-23'
  },
  {
    name:'watch',
    dueDate:'2023-6-23'
  }
];

renderTodoList();
function renderTodoList(){
  let todoListHTML ='';
  //arrow function
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="js-delete-button delete-button">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-display').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach( (deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index,1);
        renderTodoList();
      })
    });
}
//   for(let i=0; i< todoList.length;i++){
//     const todoObject = todoList[i];
//     //const name = todoObject.name;
//     //const dueDate = todoObject.dueDate;
//     const {name, dueDate} = todoObject;
//     const html = `
//       <div>${name}</div>
//       <div>${dueDate}</div> 
//       <button onclick="
//         todoList.splice(${i},1);
//         renderTodoList();
//       " class="delete-button">Delete</button>
//       `;
//     todoListHTML += html;
//   }
//   console.log(todoListHTML);
//   document.querySelector('.js-display').innerHTML = todoListHTML;
// }

document.querySelector('.js-add-button').addEventListener('click', ()=>{
  addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-dueDate-input');
  const dueDate = dateElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    //both are same we use below
    name,
    dueDate
    }
  );
  console.log(todoList);

  inputElement.value='';

  renderTodoList();
}