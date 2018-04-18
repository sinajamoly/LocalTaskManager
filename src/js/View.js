
export default class View{
    static createList(tasks){
        const markup = tasks.map(task => {
            return `<li class="review-item" id="${task.id}">${task.task} in ${task.date}<span class="delete-item">&times;</span></li>`;

        });
        document.querySelector('.reviews-list').insertAdjacentHTML('beforeend',markup);
    }

    static clearList(){
        document.querySelector('.reviews-list').innerHTML='';
    }
}


