import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorImpComponent } from './contador-imp.component';

const routes: Routes = [

  {path:'', component:ContadorImpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorImpRoutingModule { }
