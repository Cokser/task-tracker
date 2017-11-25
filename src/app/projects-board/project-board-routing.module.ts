import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsBoardComponent} from "./projects-board.component";

// import { PhraseListComponent } from "./phrase-list/phrase-list.component";
// import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";
// import { PhraseHomeComponent } from "./phrase-home/phrase-home.component";

const routes: Routes = [
  {path: 'projects', component: ProjectsBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectBoardRoutingModule {
}