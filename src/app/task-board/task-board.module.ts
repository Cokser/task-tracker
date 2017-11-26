import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskBoardComponent} from "./task-board.component";
import {TasksService} from "./tasks.service";
import {TaskDetailModule} from "./task-detail/task-detail.module";
import {TaskBoardRoutingModule} from "./task-board-routing.module";


@NgModule({
  imports: [
    CommonModule,
    TaskDetailModule,
    // TaskBoardRoutingModule
  ],
  exports: [TaskBoardComponent],
  declarations: [TaskBoardComponent],
  providers: [TasksService]
})
export class TaskBoardModule {
}
