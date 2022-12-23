import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAmountBarcodeCameraComponent } from './report-amount-barcode-camera.component';

const routes: Routes = [
  {path:'', component: ReportAmountBarcodeCameraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportAmountBarcodeCameraRoutingModule { }
