import {Component, OnInit, Output, EventEmitter} from '@angular/core';

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

export class TodoListComponent implements OnInit {

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

    let notCompletedItems = this.todoList.filter(function (item) {
      return item.completed == false;
    })

    console.log(notCompletedItems);

    var remainItemsCount = this.todoList.filter(function (item) {
      return item.completed == false;
    }).length;

    this.notifyNumberOfItemsLeft.emit(remainItemsCount);
  }

}
