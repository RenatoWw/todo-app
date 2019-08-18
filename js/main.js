const ul = document.querySelector('#tasks');
const addTask = document.querySelector('#addTask');
const taskInput = document.querySelector('#newTask');
const completedTask = document.querySelector('#completed-tasks');

addTask.onclick = () => {
    taskInput.value == '' ? console.log('beep boop') : createNewTask();
    taskInput.value = '';
    taskInput.focus();
};

const createNewTask = () => {
    // creating task li
    const items = ul.appendChild(document.createElement('li'));
    items.innerHTML = taskInput.value;
    // creating delete button
    const completeButton = document.createElement('button');
    items.appendChild(completeButton).innerHTML = 'Finish';
    items.appendChild(completeButton).style.cssFloat = 'right';
    completeButton.onclick = () => {
        deleteTask(completeButton)
        items.appendChild(completeButton).style.display = 'none';
        items.appendChild(editButton).style.display = 'none';
        completedTask.appendChild(items);
    };
    // creating edit button
    const editButton = document.createElement('button');
    items.appendChild(editButton).innerHTML = 'Edit';
    items.appendChild(editButton).style.cssFloat = 'right';
    editButton.onclick = () => editTask(items, completeButton, editButton);
}

const deleteTask = (tag) => {
    let item = tag.parentNode;
    ul.removeChild(item);
}

const editTask = (tag, tag2, tag3) => {
    const name = prompt('New name');
    tag.innerHTML = name;
    tag.appendChild(tag2)
    tag.appendChild(tag2).innerHTML = 'Finish';
    tag.appendChild(tag2).style.cssFloat = 'right';
    tag.appendChild(tag3).innerHTML = 'Edit';
    tag.appendChild(tag3).style.cssFloat = 'right';
}

// TODO: refatorar esse código feio com funções, legibilidade e organização
