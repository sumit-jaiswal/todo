import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // @TODO Need to move apiUrl in env file.
  private apiUrl = 'https://dummyjson.com';

  private todoSubject = new BehaviorSubject<Todo[]>([]);

  todos$: Observable<Todo[]> = this.todoSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Call api and getTodoList and emit it using todoSubject
   *
   */
  getTodoList() {
    return this.http
      .get<Todo[]>(`${this.apiUrl}/todo`)
      .pipe(
        map((res: any) => res['todos']),
        tap((todos) => this.todoSubject.next(todos))
      )
      .subscribe();
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
}
