import { Component } from '@angular/core';
import { TodoListService } from '../../services/todoList.service';

@Component({
  selector: 'aah-footer',
  styleUrls: ['./footer.component.css'],

  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ getCountMessage() }}</strong>
      </span>
      <button class="clear-completed"
              (click)="clearCompleted()">Clear completed</button>
    </footer>
  `
})

export class FooterComponent {

  constructor(private todoListService: TodoListService) {}

  getCountMessage(): string {
    const incomplete: number = this.todoListService.getIncompleteCount();
    const total: number = this.todoListService.getTotalCount();

    return `
      ${incomplete === 0 ? 'no' : incomplete} 
      item${incomplete === 1 ? '' : 's'} left (out of ${total})
      `;
  }

  clearCompleted(): void {
    this.todoListService.removeCompleted();
  }

}
