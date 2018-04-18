import Task from './Model/Task';
import TaskStorage  from './Model/TaskStorage';
//elements------------------------------------------
const storeBtn = document.querySelector('.tweet-btn');
const storeText = document.querySelector('.tweet-message');
localStorage.setItem('task', '');

const addTask = () =>{
    const taskText = storeText.value;
    console.log(taskText);
    const task = new Task(taskText);
    const taskStorage =new TaskStorage();
    taskStorage.addTask(task);
    taskStorage.save();
    alert('Task Have been added successfully')
}

storeBtn.addEventListener('click', addTask);





