let todos = JSON.parse(localStorage.getItem('todos')) || [{
  name: 'Build TaskHub',
  dueDate: '2025-09-19',
  time: '01:00'
  }]

    console.log(todos)
    updatetodos()
    function renderTodoList(){
      let combinedHTML = ''
      todos.forEach((todoObject, index) => {
        let html = `<div class="todo">
        <p>${todoObject.name}</p> 
        <p>${todoObject.dueDate}</p> 
        <p>${todoObject.time}</p>
        <button onclick="
        todos.splice(${index}, 1)
        renderTodoList()
        localStorage.removeItem('todos')
        ">Delete</button>
        </div>`
        combinedHTML += html
      })
      
      document.querySelector('.js-display-todo').innerHTML =  combinedHTML;
    }
    
    
    document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
      let todoInputElement = document.querySelector('.js-todo');
      let dueDateInputElement = document.querySelector('.js-duedate')
      let todoTimeInputElement = document.querySelector('.js-todo-time')
      
      let name = todoInputElement.value;
      let dueDate = dueDateInputElement.value;
      let time = todoTimeInputElement.value;
      
      todos.push({
        name: name,
        dueDate: dueDate,
        time: time
      })
      
      renderTodoList()
      
      localStorage.setItem('todos', JSON.stringify(todos))
      
      todoInputElement.value = ''
      dueDateInputElement.value = ''
      todoTimeInputElement.value = ''
      
    })
    
    function updatetodos(){
      renderTodoList()
    }