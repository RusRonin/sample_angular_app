import { Component, OnInit } from '@angular/core';

class TodoItem {
  name: string;
  done: boolean;

  constructor(name: string) {
    this.name = name;
    this.done = false;
  }
}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  newTodo = "";
  todos: TodoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  AddTodoHandler() {
    this.todos.push(new TodoItem(this.newTodo));
  }

}
