import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">

      <!--
      <li *ngFor="let item of todoList">
        {{item.title}}
      </li>-->

       <aah-todo-item *ngFor="let item of todoList"
                      [item] ="item"
                      (destroy) = "destroyItem($event)"
                      (notifyCompletedChange) = "getNotCompletedItemsCount()"> </aah-todo-item>
 
              <!--[myName] ="item.title"-->

    </ul>
  `
})

export class TodoListComponent implements OnInit, OnChanges {

  @Input() detectChangeInParent: any;

  changeLog: string[] = [];

  @Output() notifyNumberOfItemsLeft: EventEmitter<any> = new EventEmitter();

  todoList = [
    {title: 'RSVP Yes', completed: true, editing: false},
    {title: 'Set up environment', completed: true, editing: false},
    {title: 'Clone project', completed: false, editing: false},
    {title: 'Come to meetup', completed: false, editing: false},
  ];


  ngOnInit() {
    this.getNotCompletedItemsCount();
  }

  destroyItem(item: any): void {
    const index = this.todoList.indexOf(item);

    this.todoList.splice(index, 1);
  }

  getNotCompletedItemsCount(): void {

    let notCompletedItems = this.todoList.filter((item: any) => {
      return item.completed == false;
    })

    console.log(notCompletedItems);

    let remainItemsCount = this.todoList.filter((item: any) => {
      return item.completed == false;
    }).length;

    this.notifyNumberOfItemsLeft.emit(remainItemsCount);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    let log: string[] = [];

    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      log.push(`${propName} changed from ${from} to ${to}`);

      if (to != "0") {
        console.log('clear completed detection');

        this.clearCompleted();
      }
    }
    this.changeLog.push(log.join(', '));

    console.log(this.changeLog);
  }

  clearCompleted(): void {
    /*
     let completed = this.todoList.filter(function (item) {
     return item.completed == true;
     });
     */

    let completed = this.todoList.filter((item: any) => {
      return item.completed == true;
    });

    completed.forEach((item: any)=> {
      this.destroyItem(item);
    });

    /*
     completed.forEach(function (item): void {
     this.destroyItem(item);
     });
     */

  }
}
  
