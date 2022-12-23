import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanodeManutencaoComponent } from './planode-manutencao.component';

const routes: Routes = [
  { path: '', component:PlanodeManutencaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanodeManutencaoRoutingModule { }
