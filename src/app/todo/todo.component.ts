import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todo:Todo[];
inputTodo:string = ''
  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Seconed Todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
  this.todo.map((v, i) => {
    if (i==id)v.completed = !v.completed;
    return v;
  })
 }
 deleteTodo (id:number) {
   this.todo = this.todo.filter((v, i) => i != id);
 }
 addTodo () {
   this.todo.push({
     content: this.inputTodo,
     completed: false
   });
   this.inputTodo = ''
 }
}
