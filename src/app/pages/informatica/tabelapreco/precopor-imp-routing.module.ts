import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecoporImpComponent } from './precopor-imp.component';

const routes: Routes = [
   {path:'', component:PrecoporImpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecoporImpRoutingModule { }
