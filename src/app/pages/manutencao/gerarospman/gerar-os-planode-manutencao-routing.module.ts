import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerarOsPlanodeManutencaoComponent } from './gerar-os-planode-manutencao.component';

const routes: Routes = [
  { path: '', component:GerarOsPlanodeManutencaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerarOsPlanodeManutencaoRoutingModule { }
