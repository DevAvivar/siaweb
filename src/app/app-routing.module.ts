
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardUnitService } from './guards/auth-guard-unit.service';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },

  { path: 'login',
    loadChildren: () => import("./pages/login/login.module").then( (m) => m.LoginModule)
  },
  {
    path: 'principal',
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
    canActivate: [AuthGuardService, AuthGuardUnitService]
  },

  {
    path: 'usuario/sessao/unidade',
    loadChildren: () => import("./pages/unitUserSession/unit-user-session.module").then((m) => m.UnitUserSessionModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sac',
    loadChildren: () => import("./pages/sac/sac-list/sac-list.module").then((m) => m.SacListModule),
    canActivate: [AuthGuardService, AuthGuardUnitService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'sac/cadastro',//13075
    loadChildren: () => import("./pages/sac/sac-atendimento/sac-atendimento.module").then((m) => m.SacAtendimentoModule),
    canActivate: [AuthGuardService, AuthGuardUnitService],
    // canActivateChild: [PermissionADMINGuardService]
   },

      {
    path: 'sac/alterar/:id',
    loadChildren: () => import("./pages/sac/sac-atendimento/sac-atendimento.module").then((m) => m.SacAtendimentoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'relatorio/sac',
    loadChildren: () => import("./pages/relatoriosia/sac/relatorio-sac.module").then((m) => m.RelatorioSacModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'relatorio/produtosia',
    loadChildren: () => import("./pages/relatoriosia/produtosia/relatorio-prod-rec.module").then((m) => m.RelatorioProdRecModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'relatorio/produtom',
    loadChildren: () => import("./pages/relatoriosia/produtom/relatorio-produto-mot.module").then((m) => m.RelatorioProdutoMotModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'relatorio/motivorec',
    loadChildren: () => import("./pages/relatoriosia/motivorec/relatorio-motivo-rec.module").then((m) => m.RelatorioMotivoRecModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'relatorio/clienteinat',
    loadChildren: () => import("./pages/relatoriosia/clienteinat/relatorio-cliente-inat.module").then((m) => m.RelatorioClienteInatModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'relatorio/clienterea',
    loadChildren: () => import("./pages/relatoriosia/clienterea/relatorio-cliente-rea.module").then((m) => m.RelatorioClienteReaModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'relatorio/clientepos',
    loadChildren: () => import("./pages/relatoriosia/clientepos/relatorio-cliente-pos.module").then((m) => m.RelatorioClientePosModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'informatica/tabelapreco',
    loadChildren: () => import("./pages/informatica/tabelapreco/precopor-imp.module").then((m) => m.PrecoporImpModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'informatica/contadorimp',
    loadChildren: () => import("./pages/informatica/contadorimp/contador-imp.module").then((m) => m.ContadorImpModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'informatica/despesasimp',
    loadChildren: () => import("./pages/informatica/despesasimp/despesas-impressora.module").then((m) => m.DespesasImpressoraModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'informatica/aluguelimp',
    loadChildren: () => import("./pages/informatica/aluguelimp/aluguel-impressora.module").then((m) => m.AluguelImpressoraModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'informatica/contratoemprest',
    loadChildren: () => import("./pages/informatica/contratoemprest/contrato-emprestimo.module").then((m) => m.ContratoEmprestimoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'informatica/emprestimoequip',
    loadChildren: () => import("./pages/informatica/emprestimoequip/emprestimo-equipamento.module").then((m) => m.EmprestimoEquipamentoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'informatica/parqueinfo',
    loadChildren: () => import("./pages/informatica/parqueinfo/parque-informatica.module").then((m) => m.ParqueInformaticaModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },


   {
    path: 'informatica/importconta',
    loadChildren: () => import("./pages/informatica/importa/import-conta-impressora.module").then((m) => m.ImportContaImpressoraModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'manutencao/emprestimo',
    loadChildren: () => import("./pages/manutencao/emprestimo/emprestimo-ferramentas.module").then((m) => m.EmprestimoFerramentasModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'manutencao/hodometro',
    loadChildren: () => import("./pages/manutencao/hodometro/manut-hodom-horimetro.module").then((m) => m.ManutHodomHorimetroModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/ordemserv',
    loadChildren: () => import("./pages/manutencao/ordemserv/ordemde-servico.module").then((m) => m.OrdemdeServicoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/solicitacao',
    loadChildren: () => import("./pages/manutencao/solicitacao/solicitacao-servico.module").then((m) => m.SolicitacaoServicoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/agendamento',
    loadChildren: () => import("./pages/manutencao/agendamentos/agendamento-ordemde-servicos.module").then((m) => m.AgendamentoOrdemdeServicosModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/rotinaman',
    loadChildren: () => import("./pages/manutencao/rotinaman/rotinade-manutencao.module").then((m) => m.RotinadeManutencaoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/planoman',
    loadChildren: () => import("./pages/manutencao/planoman/planode-manutencao.module").then((m) => m.PlanodeManutencaoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/periodicidadepman',
    loadChildren: () => import("./pages/manutencao/periodicidadepman/periodicidade-planode-manutencao.module").then((m) => m.PeriodicidadePlanodeManutencaoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'manutencao/gerarospman',
    loadChildren: () => import("./pages/manutencao/gerarospman/gerar-os-planode-manutencao.module").then((m) => m.GerarOsPlanodeManutencaoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },

   {
    path: 'cadastro/manutencao',
    loadChildren: () => import("./pages/cadastro/manutencao/cadastro-mecanico.module").then((m) => m.CadastroMecanicoModule),
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionADMINGuardService]
   },




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
    canActivate: [AuthGuardService, AuthGuardUnitService]
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: 'usuario/cadastro',
    loadChildren: () => import("./pages/userSia/user-sia-register/user-sia-register.module").then((m) => m.UserSiaRegisterModule),
    canActivate: [AuthGuardService, AuthGuardUnitService]
    // canActivateChild: [PermissionADMINGuardService]
   },
   {
    path: "usuario/alterar/:id",
    loadChildren: () => import("./pages/userSia/user-sia-register/user-sia-register.module").then(
      (modulo) => modulo.UserSiaRegisterModule
      ),
      canActivate: [AuthGuardService, AuthGuardUnitService]
      // canActivateChild: [PermissionADMINGuardService]
  },
  {
    path: 'usuario/perfil',
    loadChildren: () => import("./pages/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [AuthGuardService, AuthGuardUnitService]
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
   canActivate: [AuthGuardService, AuthGuardUnitService]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
