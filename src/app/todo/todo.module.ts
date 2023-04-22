import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, CompletedListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class TodoModule {}
