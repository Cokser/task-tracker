import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProjectsBoardComponent} from "./projects-board/projects-board.component";

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: "",
      redirectTo: "",
      pathMatch: "full"
    },
    {path: "projects", component: ProjectsBoardComponent},
  ])],
  exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule {
}