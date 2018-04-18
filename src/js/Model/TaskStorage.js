export default class TaskStorage{
    constructor(){
        if(localStorage.getItem('task1')){
            this.tasks = JSON.parse(localStorage.getItem('task1'));
        }else{
            this.tasks=[];
            localStorage.setItem('task1', JSON.stringify(this.task));
        }
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTaskById(id){
        let afterDelete = this.tasks.filter(task=>{
            return task.id != id;
        })
        this.tasks = afterDelete;
    }

    get task(){
        return this.tasks;
    }

    save(){
        let taskString = JSON.stringify(this.tasks);
        localStorage.setItem('task1', taskString);
    }
}