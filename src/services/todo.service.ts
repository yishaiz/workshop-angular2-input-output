import  {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  todoList: Array<any> = [
    {title: 'RSVP Yes', completed: true, editing: false},
    {title: 'Set up environment', completed: true, editing: false},
    {title: 'Clone project', completed: false, editing: false},
    {title: 'Come to meetup', completed: false, editing: false},
  ];

  getTodos(): Promise<any[]> {
    return Promise.resolve(
      this.todoList
    );
  }

  destroyItem(item: any): void {
    const index = this.todoList.indexOf(item);

    this.todoList.splice(index, 1);
  }

  getNotCompletedItemsCount(): number {

/*
    let notCompletedItems = this.todoList.filter((item: any) => {
      return item.completed == false;
    })

    console.log(notCompletedItems);
*/

    let remainItemsCount = this.todoList.filter((item: any) => {
      return item.completed == false;
    }).length;

    return remainItemsCount;
  }


  clearCompleted(): void {
    let completed = this.todoList.filter((item: any) => {
      return item.completed == true;
    });

    completed.forEach((item: any)=> {
      this.destroyItem(item);
    });
  }

}
