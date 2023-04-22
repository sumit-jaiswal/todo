import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() public todos: Todo[] | undefined;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  /**
   *
   * @param todo - object
   * this function will call on checkbox selection
   */
  onItemCheck(todo: Todo) {
    console.log(todo);
    this.todoService.markCompleted(todo);
  }
}
