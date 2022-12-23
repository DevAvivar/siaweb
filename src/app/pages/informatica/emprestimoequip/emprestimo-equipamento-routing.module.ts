import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimoEquipamentoComponent } from './emprestimo-equipamento.component';

const routes: Routes = [
  {path:'',component:EmprestimoEquipamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoEquipamentoRoutingModule { }
