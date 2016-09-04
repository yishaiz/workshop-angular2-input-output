import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListService } from './services/todoList.service';

@NgModule({
  imports: [BrowserModule],
  providers: [TodoListService],
  declarations: [
    AppComponent, 
    HeaderComponent, 
    TodoInputComponent, 
    FooterComponent, 
    TodoListComponent, 
    TodoItemComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
