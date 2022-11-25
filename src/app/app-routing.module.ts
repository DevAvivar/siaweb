import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { PermissionADMINGuardService } from './guards/permission-adminguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'assinatura/email', pathMatch: 'full' },

  { path: 'login', 
    loadChildren: () => import("./pages/login/login.module").then( (m) => m.LoginModule) 
  },
  // {
  //   path: 'principal',
  //   loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
  //   canActivate: [AuthGuardService]
  // },
  // { 
  //   path: 'camera',
  //   loadChildren: () => import("./pages/camera/camera-list/camera-list.module").then((m) => m.CameraListModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  //  { 
  //   path: 'camera/cadastro',
  //   loadChildren: () => import("./pages/camera/camera-register/camera-register.module").then((m) => m.CameraRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  //  { 
  //   path: 'camera/alterar/:id',
  //   loadChildren: () => import("./pages/camera/camera-register/camera-register.module").then((m) => m.CameraRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  // { 
  //   path: 'email',
  //   loadChildren: () => import("./pages/email/email-list/email-list.module").then((m) => m.EmailListModule),
  //   canActivate: [AuthGuardService]
  //  },
  //  { 
  //   path: 'email/cadastro',
  //   loadChildren: () => import("./pages/email/email-register/email-register.module").then((m) => m.EmailRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  //  { 
  //   path: 'email/alterar/:id',
  //   loadChildren: () => import("./pages/email/email-register/email-register.module").then((m) => m.EmailRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  { 
    path: 'usuario',
    loadChildren: () => import("./pages/userSia/user-sia-list/user-sia-list.module").then((m) => m.UserSiaListModule),
    canActivate: [AuthGuardService],
    canActivateChild: [PermissionADMINGuardService]
   },
   { 
    path: 'usuario/cadastro',
    loadChildren: () => import("./pages/userSia/user-sia-register/user-sia-register.module").then((m) => m.UserSiaRegisterModule),
    canActivate: [AuthGuardService],
    canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: "usuario/alterar/:id",
    loadChildren: () => import("./pages/userSia/user-sia-register/user-sia-register.module").then(
      (modulo) => modulo.UserSiaRegisterModule
      ),
      canActivate: [AuthGuardService],
      canActivateChild: [PermissionADMINGuardService]
  },
  { 
    path: 'usuario/perfil',
    loadChildren: () => import("./pages/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [AuthGuardService]
   },
  //  { 
  //   path: "relatorio/quantidade/camera",
  //   loadChildren: () => import("./pages/report/report-amount-barcode-camera/report-amount-barcode-camera.module").then((m) => m.ReportAmountBarcodeCameraModule),
  //   canActivate: [AuthGuardService]
  //  },
  //  { 
  //   path: "relatorio/listagem/grupo",
  //   loadChildren: () => import("./pages/report/report-list-barcode-camera/report-list-barcode-camera.module").then((m) => m.ReportListBarcodeCameraModule),
  //   canActivate: [AuthGuardService]
  //  },

  //  {
  //    path: "barras",
  //    loadChildren: () => import("./pages/barras/barras-list/barras-list.module").then( (m) => m.BarrasListModule),
  //    canActivate: [AuthGuardService]
  //  },
  //  { 
  //   path: 'auditoria',
  //   loadChildren: () => import("./pages/systemAudit/system-audit-list/system-audit-list.module").then((m) => m.SystemAuditListModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  //  { 
  //   path: 'auditoria/cadastro',
  //   loadChildren: () => import("./pages/systemAudit/system-audit-register/system-audit-register.module").then((m) => m.SystemAuditRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },
  //  { 
  //   path: 'auditoria/alterar/:id',
  //   loadChildren: () => import("./pages/systemAudit/system-audit-register/system-audit-register.module").then((m) => m.SystemAuditRegisterModule),
  //   canActivate: [AuthGuardService],
  //   canActivateChild: [PermissionADMINGuardService]
  //  },

   { path: 'assinatura/email', 
   loadChildren: () => import("./pages/emailSignature/email-signature.module").then( (m) => m.EmailSignatureModule),
   canActivate: [AuthGuardService]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
