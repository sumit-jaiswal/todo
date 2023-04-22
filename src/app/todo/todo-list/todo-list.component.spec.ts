import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TODOS_LIST } from 'src/app/testing/todos.mock';
import { TodoService } from 'src/app/shared/services/todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let todoService: TodoService;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called markCompleted on #onItemCheck', () => {
    let todoItem = TODOS_LIST.todos[0];
    let spyMarkCompleted = spyOn(todoService, 'markCompleted');
    component.onItemCheck(todoItem);

    expect(spyMarkCompleted).toHaveBeenCalledWith(todoItem);
  });
});
