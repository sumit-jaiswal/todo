import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  fullName: string = 'Sumit Jaiswal';

  todoList$: Observable<Todo[]> | undefined;
  completedList$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList();

    this.todoList$ = this.todoService.filterByStatus(false);
    this.completedList$ = this.todoService.filterByStatus(true);
  }
}
