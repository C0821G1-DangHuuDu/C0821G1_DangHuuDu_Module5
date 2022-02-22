import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo = {};
  todoDelete: Todo;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const todoId = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(todoId).subscribe(value => {
      this.todo = value;
    });
  }

  ngOnInit() {
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
    this.router.navigateByUrl('');
  }
}
