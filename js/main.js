const tasks = document.querySelector('#tasks');
const addTask = document.querySelector('#addTask');
const taskInput = document.querySelector('#newTask');
const completedTasks = document.querySelector('#completed-tasks');

addTask.onclick = () => {
    if(taskInput.value){
        addTodo(taskInput.value);
    }
    taskInput.value = '';
    taskInput.focus();
};

const finishTodo = (todo) => {
    tasks.removeChild(todo);
    todo.classList.add('todoitem--done');
    completedTasks.appendChild(todo)
}

const editTodo = (todo) => {
    const newText = prompt('Novo valor');
    const todoText = todo.querySelector('.todoitem__text');
    todoText.innerHTML = newText;
}

const addTodo = (text) => {
    const todo = document.createElement('li');
    todo.classList.add("todoitem");

    const todoText = document.createElement('span');
    todoText.classList.add("todoitem__text");
    todoText.innerHTML = text;
    
    const actionButtons = createActionButtons({
        onFinish: () => finishTodo(todo),
        onEdit: () => editTodo(todo),
    });

    todo.appendChild(todoText);
    todo.appendChild(actionButtons)

    tasks.appendChild(todo);

    return todo;
}

const createActionButtons = ({ onFinish, onEdit }) => {
    const actionButtons = document.createElement('div');
    actionButtons.classList.add("todoitem__actions");

    const completeButton = createActionButton("Finish", onFinish)
    const editButton = createActionButton("Edit", onEdit);
    
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(completeButton);

    return actionButtons;
}

const createActionButton = (text, onClick) => {
    const actionButton = document.createElement('button');
    actionButton.classList.add("todoitem__button");
    actionButton.innerHTML = text;
    actionButton.onclick = onClick;
    return actionButton;
}