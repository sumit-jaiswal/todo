import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() public todos: Todo[] | undefined;
  constructor() {}

  ngOnInit(): void {}

  onItemCheck(todo: Todo) {
    console.log(todo);
  }
}
