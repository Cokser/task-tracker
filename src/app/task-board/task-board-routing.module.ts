import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TaskBoardComponent} from "./task-board.component";

const routes: Routes = [
  {path: 'tasks', component: TaskBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskBoardRoutingModule {
}