import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosComponent {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(catchError((error) => {
      console.error('Error fetching todos:', error);
      return [];
    })).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
