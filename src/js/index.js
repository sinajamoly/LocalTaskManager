import Task from './Model/Task';
import TaskStorage  from './Model/TaskStorage';
import view from './View';
//elements------------------------------------------
const storeBtn = document.querySelector('.tweet-btn');
const storeText = document.querySelector('.tweet-message');
const deleteItem = document.querySelector('.reviews-list');

const t =new TaskStorage();
view.createList(t.task);

const addTask = () =>{
    const taskText = storeText.value;
    const task = new Task(taskText);
    const taskStorage =new TaskStorage();
    taskStorage.addTask(task.task);
    taskStorage.save();
    view.clearList();
    view.createList(taskStorage.task);
    alert('Task Have been added successfully')
}

deleteItem.addEventListener('click',(e)=>{
    const taskStorage = new TaskStorage();

    if(e.target.className === 'delete-item'){
        const id = e.target.parentNode.getAttribute('id');
        taskStorage.deleteTaskById(id);
        taskStorage.save();
        view.clearList();
        view.createList(taskStorage.task);

    }
})


storeBtn.addEventListener('click', addTask);





