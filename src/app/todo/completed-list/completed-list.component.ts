import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.scss'],
})
export class CompletedListComponent implements OnInit {
  @Input() public todos: Todo[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
