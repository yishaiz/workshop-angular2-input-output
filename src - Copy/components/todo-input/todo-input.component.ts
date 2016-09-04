import { Component } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';

@Component({
  selector: 'aah-todo-input',
  styleUrls: ['./todo-input.component.css'],

  template: `
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           #newTodoInput
           (keyup.enter)="addItem(newTodoInput)">
  `
})

export class TodoInputComponent {

  constructor(private todoListService: TodoListService) {}

  addItem(inputElement): void {
    // It is not best practice to change element's property directly.
    // (Avoid passing the element reference itself to a method.)
    // Better install angular/forms and use FormsModule's ngModel.
    this.todoListService.addItem(inputElement.value);
    inputElement.value = '';
  }
  
}
