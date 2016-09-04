import { TodoItem } from '../models/todo-item.model';

export class TodoListService {

  private todoList: Array<TodoItem> = [
    new TodoItem('RSVP Yes', true, false),
    new TodoItem('Set up environment', true, false),
    new TodoItem('Clone project', false, false),
    new TodoItem('Come to meetup', false, false),
  ];

  getTodoList(): Array<TodoItem> {
    return this.todoList;
  }

  removeItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  clearEditing(): void {
    this.todoList.forEach((listItem) => listItem.editing = false);
  }

  addItem(title: string): void {
    this.todoList.push(new TodoItem(title));
  }

  getIncomplete(): Array<TodoItem> {
    return this.todoList.filter((item) => {
      return !item.completed;
    })
  }

  getIncompleteCount(): number {
    return this.getIncomplete().length;
  }

  getTotalCount(): number {
    return this.todoList.length;
  }

  removeCompleted(): void {
    const incomplete = this.getIncomplete();
    this.todoList.splice(0, this.todoList.length);
    this.todoList.push(...incomplete);
  }

}