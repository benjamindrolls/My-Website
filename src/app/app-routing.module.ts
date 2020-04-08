import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectsComponent } from './home/my-projects/my-projects.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "Projects", component: MyProjectsComponent},
  {path: "Home", component:HomeComponent},
  {path: "", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
