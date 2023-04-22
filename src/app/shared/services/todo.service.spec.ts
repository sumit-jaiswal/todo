import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { TODOS_LIST } from 'src/app/testing/todos.mock';
import { of } from 'rxjs';
import { SharedModule } from '../shared.module';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should emit all todos on #getTodoList calls', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(TODOS_LIST));
    service.getTodoList().subscribe(() => {
      service.todos$.subscribe((countries) => {
        expect(countries.length).toEqual(TODOS_LIST.todos.length);
        done();
      });
    });
  });

  it('should filter data by completed status on #filterByStatus', (done) => {
    service['todoSubject']?.next(TODOS_LIST.todos);
    service.filterByStatus(true).subscribe((todos) => {
      expect(todos.length).toEqual(7);
      done();
    });
  });
});
