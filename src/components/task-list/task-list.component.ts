import { Component } from '@angular/core';
import { Task } from '../../app/models/task.model';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, AddTaskComponent]
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(task: Task) {
    this.taskService.toggleTaskCompletion(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  addTask(title: string) {
    this.taskService.addTask(title);
  }
}
