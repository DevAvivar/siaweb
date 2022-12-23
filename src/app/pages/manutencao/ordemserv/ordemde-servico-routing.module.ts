import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdemdeServicoComponent } from './ordemde-servico.component';

const routes: Routes = [
  {path: '', component:OrdemdeServicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemdeServicoRoutingModule { }
