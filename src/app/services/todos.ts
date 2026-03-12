import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
      userId: 1,
    },
    {
      id: 2,
      title: 'Build a Todo App',
      completed: false,
      userId: 1,
    },
    {
      id: 3,
      title: 'Write Unit Tests',
      completed: false,
      userId: 1,
    },
  ];
}
