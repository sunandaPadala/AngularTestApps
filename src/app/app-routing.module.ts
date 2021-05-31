import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaneDashboardComponent } from './components/lane-dashboard/lane-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LaneDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
