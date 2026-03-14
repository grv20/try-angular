import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();
  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
