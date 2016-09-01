import { Component } from '@angular/core';

@Component({
  selector: 'aah-todo-input',
  styleUrls: ['./todo-input.component.css'],

  template: `
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  `
})

export class TodoInputComponent {
  
}
