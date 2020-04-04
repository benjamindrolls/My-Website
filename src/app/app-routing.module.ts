import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component';


const routes: Routes = [
  {path: "Projects", component: MyProjectsComponent},
  {path: "", component:MyProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
