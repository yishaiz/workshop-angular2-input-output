import {Component} from '@angular/core';

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
                      [myName] ="item.title"
                      (destroy) = "destroyItem($event)"> </aah-todo-item>  
    </ul>
  `
})

export class TodoListComponent {

  todoList = [
    {title: 'RSVP Yes', completed: true, editing: false},
    {title: 'Set up environment', completed: true, editing: false},
    {title: 'Clone project', completed: false, editing: false},
    {title: 'Come to meetup', completed: false, editing: false},
  ];


  destroyItem(item: any): void {
    const index = this.todoList.indexOf(item);

    this.todoList.splice(index, 1);
  }

}
