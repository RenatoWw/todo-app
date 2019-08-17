const ul = document.querySelector('#tasks');
const addTask = document.querySelector('#addTask');
let taskInput = document.querySelector('#newTask');

addTask.addEventListener('click', () => {
    if(taskInput.value == ''){
        console.log('beep boop');
    } else {
        const items = ul.appendChild(document.createElement('li'));
        const completeButton = document.createElement('button');
        items.innerHTML = taskInput.value;
        items.appendChild(completeButton).innerHTML = 'Finish';
        items.appendChild(completeButton).style.cssFloat = 'right';
        items.appendChild(completeButton).style.marginTop = '3.5px';
        items.appendChild(completeButton).style.marginRight = '5px';
        items.appendChild(completeButton).style.borderRadius = '4px';
        completeButton.addEventListener('click', () => {
            let item = completeButton.parentNode;
            ul.removeChild(item);
        });
    }
    taskInput.value = '';
    taskInput.focus();
});


// TODO: seção 'what i've done'
// TODO: botão editar que abre um prompt para usuário escrever novo nome
// TODO: refatorar esse código feio com funções, legibilidade e organização
