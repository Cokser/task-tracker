import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsBoardComponent} from "./projects-board.component";
import {ProjectsService} from "./projects.service";
import {TaskBoardModule} from "../task-board/task-board.module";

@NgModule({
  imports: [
    CommonModule,
    TaskBoardModule
  ],
  exports: [
    ProjectsBoardComponent
  ],
  declarations: [
    ProjectsBoardComponent
  ],
  providers: [ProjectsService]
})
export class ProjectsBoardModule {
}
