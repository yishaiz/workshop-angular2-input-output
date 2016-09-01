import {Component} from '@angular/core';

@Component({
  selector: 'aah-todo-list',
  styleUrls: ['./todo-list.component.css'],

  template: `
    <ul class="todo-list">


<!--
<li *ngFor="let item of todoList">
  {{item.title}}
</li>-->


   <!-- Item -->
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
                   
                   
            <label>{{ item.title }}</label>
            <button class="destroy"
                    (click) = "destroyItem(item)">
            </button>
          </div>
          <input class="edit">
      </li>



      <!-- Item -->
      <li>
        <div class="view">
          <input class="toggle"
                 type="checkbox">
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- Completed -->
      <li class="completed">
        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 checked>
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- Editing Item -->
      <li class="editing">
        <div class="view">
          <input class="toggle"
                 type="checkbox">
          <label>Todo Title</label>
          <button class="destroy"></button>
        </div>
        <input class="edit">
      </li>

      <!-- /Item-->
    </ul>
  `
})

export class TodoListComponent {

  todoList = [
    {title: 'RSVP Yes', completed: true, editing: false},
    {title: 'Set up environment', completed: true, editing: false},
    {title: 'Clone project', completed: false, editing: false},
    {title: 'Come to meetup', completed: false, editing: true},
  ];


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

  destroyItem(item: any) : void {
    const index = this.todoList.indexOf(item);

    this.todoList.splice(index, 1);
  }




}
