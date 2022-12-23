import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportContaImpressoraComponent } from './import-conta-impressora.component';

const routes: Routes = [
  {path:'', component: ImportContaImpressoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportContaImpressoraRoutingModule { }
