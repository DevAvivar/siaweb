import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoOrdemdeServicosComponent } from './agendamento-ordemde-servicos.component';

const routes: Routes = [
  { path:'',component:AgendamentoOrdemdeServicosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoOrdemdeServicosRoutingModule { }
