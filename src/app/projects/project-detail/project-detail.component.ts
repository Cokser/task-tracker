import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Project} from "../Project";
import {ProjectsService} from "../projects.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  public currentProject: Project;
  public subscription1: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.subscription1 = this.activatedRoute.params.subscribe((params: Params) => {
      this.projectsService.getProject(params["id"])
        .subscribe(project => {
          this.currentProject = project;
        });
    });
  }

  goToProjectsList() {
    let pId = this.currentProject ? this.currentProject.shortName : null;
    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }

  public ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
