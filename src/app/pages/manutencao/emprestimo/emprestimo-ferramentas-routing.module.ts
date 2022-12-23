import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimoFerramentasComponent } from './emprestimo-ferramentas.component';

const routes: Routes = [
  { path: '', component:EmprestimoFerramentasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoFerramentasRoutingModule { }
