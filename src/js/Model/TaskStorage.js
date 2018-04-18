export default class TaskStorage{
    constructor(){
        if(localStorage.getItem('task')){
            this.tasks = JSON.parse(localStorage.getItem('task'));
        }else{
            this.tasks=[];
            localStorage.setItem('task', JSON.stringify(this.task));
        }
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTaskById(id){
        let afterDelete = this.tasks.map(task =>{
            if(task.id === id){
                return task
            }
        });

        this.tasks = afterDelete;
    }

    get task(){
        return this.tasks;
    }

    save(){
        let taskString = JSON.stringify(this.tasks);
        localStorage.setItem('task', taskString);
    }
}