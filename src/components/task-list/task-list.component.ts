import { Component } from '@angular/core';
import { Task } from '../../app/models/task.model';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [
    {id: 1, title: "Изучить Ангуляр", completed: false},
    {id: 2, title: "Создать to-do list", completed: false}
  ]

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
