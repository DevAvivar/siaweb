import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraRegisterComponent } from './camera-register.component';

const routes: Routes = [
  {path:'', component: CameraRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRegisterRoutingModule { }
