import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMecanicoComponent } from './cadastro-mecanico.component';

const routes: Routes = [
  { path: '', component:CadastroMecanicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroMecanicoRoutingModule { }
