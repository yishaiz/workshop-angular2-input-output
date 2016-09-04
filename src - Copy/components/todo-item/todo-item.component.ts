import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `
    <li [ngClass]="{completed: item.completed, editing: item.editing}">
      <div class="view">
      
        <input class="toggle"
               type="checkbox" 
               [checked]="item.completed" 
               #completedCheckbox 
               (change)="changeCompleted(completedCheckbox.checked)">
               
        <label (click)="editItem()">{{ item.title }}</label>
        
        <button class="destroy" (click)="destroyItem()"></button>
        
      </div>
      
      <input class="edit"
             [value]="item.title" 
             #editItemInput 
             (keyup.enter)="changeTitle(editItemInput.value)" 
             (keyup.escape)="cancelEdit()">
    </li>
  `
})

export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() destroy: EventEmitter<any> = new EventEmitter();
  @Output() editing: EventEmitter<any> = new EventEmitter();

  changeCompleted(checked: boolean): void {
    this.item.completed = checked;
  }
  
  destroyItem(): void {
    this.destroy.emit(this.item);
  }
  
  editItem(): void {
    // since the input is not focused on when it reveals, 
    // we need to tell the parent to set all other items
    // to editing = false.
    // this will be refactored when we'll use a directive
    // to set autofocus on the input, 
    // and then we could use (blur)="cancelEdit()"
    this.editing.emit(this.item);
    this.item.editing = true;
  }

  changeTitle(newTitle: string): void {
    this.item.title = newTitle;
    this.item.editing = false;
  }

  cancelEdit(): void {
    this.item.editing = false;
  }
}
