import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoServicoComponent } from './solicitacao-servico.component';

const routes: Routes = [
  {path: '', component:SolicitacaoServicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacaoServicoRoutingModule { }
