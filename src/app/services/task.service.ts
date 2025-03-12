import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Изучить Angular', completed: false },
    { id: 2, title: 'Создать To-Do List', completed: false }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
