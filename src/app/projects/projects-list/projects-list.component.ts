import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Project} from "../Project";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProjectsListComponent implements OnInit, OnDestroy {

  public projects: Project[];
  public selectedId: any;
  public subscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      // this.selectedId = params["id"];
      this.projectsService.getProjects()
        .subscribe(projects => {
          this.projects = projects;
        });
    });
  }

  public isSelected(project: Project) {
    return project.shortName == this.selectedId;
  }

  public onSelect(selected: Project) {
    // Перенаправление пользователя используя относительный путь.
    this.router.navigate([selected.shortName], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}