import { Component } from '@angular/core';

@Component({
  selector: 'aah-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>1</strong>
        item left
      </span>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `
})

export class FooterComponent {
  
}
