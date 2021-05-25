import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingApprovalComponent } from './components/pending-approval/pending-approval.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'approval',
    pathMatch: 'full'
  },
  {
    path: 'approval',
    component: PendingApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
