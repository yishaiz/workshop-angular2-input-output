import {Component, Input} from '@angular/core';

@Component({
  selector: 'aah-todo-item',
  styleUrls: ['./todo-item.component.css'],

  template: `

      <li *ngFor="let item of todoList" 
        [ngClass]="getItemClass(item)">
        <!--[ngClass]="{bold : item.isBold}"-->
        
        <div class="view">
            <input class="toggle"
                   type="checkbox"
                   [checked] = "item.completed"
                   
                   #completedCheckbox
                   (change) = "changeCompleted(item, completedCheckbox.checked)">
                   
                   <!--(change) = "changeCompleted(item)">-->
                                      
                       
            <label (click)="editItem(item)">{{ item.title }}</label>
            
            <button class="destroy"
                    (click) = "destroyItem(item)">
            </button>
          </div>
          <input class="edit"
                 #editValue
                 [value]="item.editedTitle"
                 (keyup.enter)="saveChange(item, editValue)"
                 (keyup.escape)="undoChange(item)">

      </li>

  `
})

export class TodoItemComponent {

  @Input  item

  getItemClass(item: any): any {
    return {
      completed: item.completed,
      editing: item.editing
    };
  }

  changeCompleted(item: any, checked: boolean): void {
    // item.completed = !item.completed;
    item.completed = checked;
  }


  changeCompletedOtherWay(item: any): void {
    item.completed = !item.completed;
  }




  editItem(item: any): void {
    item.editing = true;
    item.editedTitle = item.title;
  }

  saveChange(item: any, editValue: any): void {
    console.log('saveChange');

    item.title = editValue.value;
    item.editing = false;
  }

  undoChange(item: any): void {
    console.log('undoChange');
    item.editing = false;
  }
}
