import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskBoardComponent} from "./task-board.component";
import {TasksService} from "./tasks.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TaskBoardComponent],
  declarations: [TaskBoardComponent],
  providers: [TasksService]
})
export class TaskBoardModule { }
