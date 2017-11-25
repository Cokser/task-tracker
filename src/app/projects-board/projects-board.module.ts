import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProjectsBoardComponent} from "./projects-board.component";
import {ProjectsService} from "./projects.service";
import {ProjectBoardRoutingModule} from "./project-board-routing.module";
import {ProjectDetailModule} from "./project-detail/project-detail.module";


@NgModule({
  imports: [
    CommonModule,
    ProjectDetailModule,
    ProjectBoardRoutingModule
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
