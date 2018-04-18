
export default class Task{
    constructor(task){
        this.task={
            id: new Date().getMilliseconds(),
            task
        }
    }
}