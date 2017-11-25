import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Project} from "../Project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {

  public currentProject: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
