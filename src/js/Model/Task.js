
export default class Task{
    constructor(task){
        this.task={
            id: new Date().getMilliseconds(),
            date: `${new Date().getDate()} /${new Date().getMonth()}/ ${new Date().getFullYear()} at ${new Date().getHours()}:${new Date().getMinutes()} `,
            task
        }
    }
    get Task(){
        return this.task;
    }
}