import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectDetailComponent} from "./project-detail.component";
import {TaskBoardModule} from "../../task-board/task-board.module";

@NgModule({
  imports: [
    CommonModule,
    TaskBoardModule,
  ],
  exports: [ProjectDetailComponent],
  declarations: [ProjectDetailComponent]
})
export class ProjectDetailModule {
}
