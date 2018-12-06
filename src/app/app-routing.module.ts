import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {EditViewComponent} from "./edit-view/edit-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'tweets', pathMatch: 'full'},
  { path: 'tweets', component: HomepageComponent, },
  { path: 'edit-view', component: EditViewComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
