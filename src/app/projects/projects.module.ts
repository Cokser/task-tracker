import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectsService} from "./projects.service";
// import {ProjectsRoutingModule} from "./projects-routing.module";
import {TaskBoardModule} from "../task-board/task-board.module";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";


@NgModule({
  imports: [
    CommonModule,
    // ProjectsRoutingModule,
    TaskBoardModule
  ],
  exports: [
    ProjectsListComponent,
    ProjectDetailComponent
  ],
  declarations: [
    ProjectsListComponent,
    ProjectDetailComponent
  ],
  providers: [ProjectsService]
})
export class ProjectsBoardModule {
}
