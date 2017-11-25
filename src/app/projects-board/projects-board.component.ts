import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Project} from "./Project";
import {ProjectsService} from "./projects.service";

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProjectsBoardComponent implements OnInit {

  public projects: Project[];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getProjects()
      .subscribe(projects => {
      this.projects = projects;
    });
  }



}
