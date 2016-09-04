import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';
import {TodoItem} from "../../models/todo-item.model";

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

  constructor(private todoService: TodoListService) {
    //todoService
  }

  todoList: Array<TodoItem> = [];

  /*todoList = [
   {title: 'RSVP Yes', completed: true, editing: false},
   {title: 'Set up environment', completed: true, editing: false},
   {title: 'Clone project', completed: false, editing: false},
   {title: 'Come to meetup', completed: false, editing: false},
   ];
   */

  ngOnInit(): void {
    this.getTodos();

    this.getNotCompletedItemsCount();
  }


  getTodos(): void {
    this.todoService.getTodos().then(
      todos=>{
        this.todoList = todos;

        this.getNotCompletedItemsCount();
      }
    );
  }

  destroyItem(item: TodoItem): void {
    //can be also as promise
    this.todoService.destroyItem(item);

    this.getTodos();

    //this.getNotCompletedItemsCount();
  }

  getNotCompletedItemsCount(): void {

    let remainItemsCount = this.todoService.getNotCompletedItemsCount();

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
    this.todoService.clearCompleted();

    this.getTodos();
  }
}

