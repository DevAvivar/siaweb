import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSiaRegisterComponent } from './user-sia-register.component';

const routes: Routes = [
  {path:'', component: UserSiaRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSiaRegisterRoutingModule { }
