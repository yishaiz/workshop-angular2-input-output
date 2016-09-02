import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'aah-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>{{itemsLeft}}</strong> item left
      </span>
      <button class="clear-completed"
        (clear) = "clearCompletedItems()">Clear completed</button>
    </footer>
  `
})

export class FooterComponent {
  @Input() itemsLeft: number;
  @Output() clearCompleted: EventEmitter<any> = new EventEmitter();

  clearCompletedItems(): void {

  }
}
