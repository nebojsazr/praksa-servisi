import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITodo {
  id?: number;
  title?: string;
  action?: string;
  date?: string;
  desc?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private BASE_URL = 'https://my-json-server.typicode.com/nebojsazr/todo_service';

  constructor(private http: HttpClient) { }

  getTodo(): Observable<ITodo[]>  {
    return this.http.get<ITodo[]>(this.BASE_URL + '/todos');
  }

}
