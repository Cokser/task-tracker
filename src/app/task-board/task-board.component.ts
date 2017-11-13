import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TasksService} from "./tasks.service";

import {Task} from "./Task";


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskBoardComponent implements OnInit {

  public tasks: Task[];

  constructor( private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

}
