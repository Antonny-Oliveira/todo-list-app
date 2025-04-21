const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList =document.getElementById('task-list');

addBtn.addEventListener('click',addTask);

taskInput.addEventListener('keypress', function (e){
    if (e.key === 'Enter'){
        addTask();
    }
});

function addTask(){
    const taskText = taskInput.value.trim();
    
    if(taskText ==='')return;

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', ()=> {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='🗑️';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click',(e)=>{
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}