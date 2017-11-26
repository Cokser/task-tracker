import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProjectsListComponent} from "./projects/projects-list/projects-list.component";
import {ProjectDetailComponent} from "./projects/project-detail/project-detail.component";

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: '/projects', pathMatch: 'full'},
    {path: 'projects', component: ProjectsListComponent},
    {path: 'projects/:id', component: ProjectDetailComponent}
  ])],
  exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule {
}