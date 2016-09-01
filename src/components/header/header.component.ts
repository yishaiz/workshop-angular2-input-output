import { Component } from '@angular/core';

@Component({
  selector: 'aah-header',
  styleUrls: ['./header.component.css'],

  template: `
    <header class="header">  
      <h1>{{ title }}</h1>  
      <aah-todo-input></aah-todo-input>
    </header>
  `
})

export class HeaderComponent {

  title: string = 'Todos';

}
