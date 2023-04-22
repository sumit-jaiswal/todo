import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, CompletedListComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
