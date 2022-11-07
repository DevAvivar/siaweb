import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasListComponent } from './barras-list.component';

const routes: Routes = [
  {path:'', component: BarrasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrasListRoutingModule { }
