import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL = 'http://localhost:3000/todoList';


  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Todo[]>{
  return this.httpClient.get<Todo[]>(this.API_URL);
  }
  findById(todoId: number): Observable<Todo>{
    return this.httpClient.get<Todo>(this.API_URL + '/' + todoId);
  }
  deleteTodo(todoId: number): Observable<void>{
    return this.httpClient.delete<void>(this.API_URL + '/' + todoId);
  }
}
