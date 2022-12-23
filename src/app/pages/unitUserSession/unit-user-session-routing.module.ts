import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitUserSessionComponent } from './unit-user-session.component';

const routes: Routes = [
  {path:'', component: UnitUserSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitUserSessionRoutingModule { }
