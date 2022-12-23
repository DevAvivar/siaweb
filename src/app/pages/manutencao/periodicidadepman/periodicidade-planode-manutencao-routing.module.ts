import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicidadePlanodeManutencaoComponent } from './periodicidade-planode-manutencao.component';

const routes: Routes = [
  { path: '', component:PeriodicidadePlanodeManutencaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicidadePlanodeManutencaoRoutingModule { }
