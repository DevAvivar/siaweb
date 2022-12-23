import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemAuditListComponent } from './system-audit-list.component';

const routes: Routes = [
  {path:'', component: SystemAuditListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAuditListRoutingModule { }
