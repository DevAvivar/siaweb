import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SacListComponent } from './sac-list.component';

const routes: Routes = [
  {path:'', component: SacListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacListRoutingModule { }
