import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `

<!--*ngFor="let item of todoList"-->
      <li [ngClass]="getItemClass(item)">
        <!--[ngClass]="{bold : item.isBold}"-->
        
        <!--<div>another input : {{anotherInput}}</div>-->
        
        <div class="view">
            <input class="toggle"
                   type="checkbox"
                   [checked] = "item.completed"
                   
                   #completedCheckbox
                   (change) = "changeCompleted(item, completedCheckbox.checked)">
                   
                   <!--(change) = "changeCompleted(item)">-->
                       
            <label (click)="editItem(item, $event, editValue)">{{ item.title }}</label>
            
            <button class="destroy"
                    (click) = "destroyItem(item)">
            </button>
          </div>
          <input class="edit"
                 #editValue
                 [value]="item.editedTitle"
                 (keyup.enter)="saveChange(item, editValue)"
                 (keyup.escape)="undoChange(item)"
                 (blur)="undoChange(item)">

      </li>

  `
})

export class TodoItemComponent {

  @Input() item: TodoItem;

  //sample of give a different name for parameter:
  // @Input('myName') anotherInput: any;

  @Output() destroy: EventEmitter<any> = new EventEmitter();
  @Output() notifyCompletedChange: EventEmitter<any> = new EventEmitter();


  getItemClass(item: TodoItem): any {
    return {
      completed: item.completed,
      editing: item.editing
    };
  }

  changeCompleted(item: TodoItem, checked: boolean): void {
    // item.completed = !item.completed;
    item.completed = checked;

    this.notifyCompletedChange.emit(item);
  }

  changeCompletedOtherWay(item: TodoItem): void {
    item.completed = !item.completed;
  }

  editItem(item: TodoItem, event: any, editValue: any): void {
    console.log(event);
    console.log(editValue);

    // editValue.focus();

    item.editing = true;

    // item.editedTitle = item.title;
    editValue.value = item.title;

    console.log(editValue);
  }

  saveChange(item: TodoItem, editValue: any): void {
    console.log('saveChange');

    item.title = editValue.value;
    item.editing = false;
  }

  undoChange(item: TodoItem): void {
    console.log('undoChange');
    item.editing = false;
  }

  destroyItem(item: TodoItem): void {
    this.destroy.emit(item);
  }

}
