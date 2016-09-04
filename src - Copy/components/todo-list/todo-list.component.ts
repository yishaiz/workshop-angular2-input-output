import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">

      <aah-todo-item *ngFor="let todoItem of todoList"
                     [item]="todoItem"
                     (destroy)="destroyItem(todoItem)"
                     (editing)="clearEditing()">
      </aah-todo-item>

    </ul>
  `
})

export class TodoListComponent implements OnInit {
  private todoList: Array<TodoItem>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  destroyItem(item: TodoItem): void {
    this.todoListService.removeItem(item);
  }

  // See comment in TodoItemComponent.editItem()
  clearEditing(): void {
    this.todoListService.clearEditing();
  }
}
