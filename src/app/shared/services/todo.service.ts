import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // @TODO Need to move apiUrl in env file.
  private apiUrl = 'https://dummyjson.com';

  // make private todoSubject which can change by service only.
  private todoSubject = new BehaviorSubject<Todo[]>([]);

  todos$: Observable<Todo[]> = this.todoSubject.asObservable();

  constructor(private http: HttpClient, private loading: LoadingService) {}

  /**
   * Call api and getTodoList and emit it using todoSubject
   *
   */
  getTodoList() {
    const todoList$ = this.http.get<Todo[]>(`${this.apiUrl}/todo`).pipe(
      map((res: any) => res['todos']),
      tap((todos) => this.todoSubject.next(todos))
    );

    // no need to destroy http subscription, since httpClient emit only once
    this.loading.showLoaderUntilCompleted(todoList$).subscribe();
  }

  /**
   *
   * @param isCompleted : boolean - pass true to get all completed list and false for todo list
   * @returns filter list by complete status.
   */
  filterByStatus(isCompleted: boolean): Observable<Todo[]> {
    return this.todos$.pipe(
      map((todos) => todos.filter((course) => course.completed == isCompleted))
    );
  }

  /**
   *
   * @param item Object
   * API call is completed because as per task API call not required.
   * Change complete status and emit updated data
   */
  markCompleted(item: Todo) {
    // @TODO if API call required below code can use
    // return this.http.put<TodoItem>(`https://dummyjson.com/todo/${todoItem.id}`, {completed: true}).pipe(
    //   map((res: any) => res['todos']),
    //   tap((todos) => //emit data )
    // );

    // emit update array
    const updatedList = this.todoSubject.getValue().map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    this.todoSubject.next(updatedList);
  }
}
