import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogConformationComponent } from 'src/app/_shared/dialogConfirmation/dialog-conformation.component';
import { UserSiaService } from '../../userSia/user-sia.service';
import { SystemAuditService } from '../system-audit.service';
import { SystemAudit } from '../systemAudit.model';

@Component({
  selector: 'app-system-audit-list',
  templateUrl: './system-audit-list.component.html',
  styleUrls: ['./system-audit-list.component.scss']
})
export class SystemAuditListComponent implements OnInit {

  nameContent: string = 'Lista de Auditoria do Sistema';//my-toolbar

  systemAudit$!: Observable<SystemAudit[]>;
  inactive = false;
  systemAudit!: Observable<SystemAudit>;

/*
  Colocando os dados para receber os inputs properties
  */
  displayedColumns: string[] = ['code', 'userCode', 'userLogin', 'local', 'operation', 'dateTime', 'change'];//nome da coluna do json que será percorrido
  dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumns: string[] = ['CODIGO', 'CODIGO USUARIO', 'LOGIN', 'MODELO', 'OPERACAO', 'DATA/HORA', 'DADOS'];//nome da coluna que será exibido no html usado como rotulo
  pageable: any;//recebe o conteudo da paginação a cada requisição
  totalElements!: number;
  loading = false;
  sort!: MatSort;
  paginator!: MatPaginator;
  term!: string;//recebe o termo da pesquisa dentro do input da tabela.
  edit: any;//recebe a url para tela de edição da systemAudit
  delete: any;//recebe uma função 
  create: any;//recebe a url para tela de cadastro da systemAudit
  errorMsg: any;


  constructor(
      private systemAuditService: SystemAuditService,
      private matSnackBar: MatSnackBar,
      private router: Router,
      public matDialog: MatDialog,
      private userSiaService: UserSiaService
  ) { }

  ngOnInit(): void {

      this.listsystemAudit();//por default todos os parametros sao nulos
  }

  /**
   * Função é disparada após a renderização do componente
   */
  ngAfterViewInit() {

  }

  /**
 * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
 * @returns MatSort
 */
  getMatSort(event: any) {
      this.sort = event;
      console.log("Ecoando na Ordenação:   " + this.sort?.direction);
      if (this.term)
          this.listSystemAuditPageAndSearch();
      else
          this.listsystemAudit();
  }

  getMatPaginator(event: any) {

      this.paginator = event;
      console.log("Ecoando na Paginação:   " + this.paginator?.page);
      if (this.term)
          this.listSystemAuditPageAndSearch();
      else
          this.listsystemAudit();
  }


  getSearchAll(event: any) {
      this.term = event;
      console.log("Captura da Pesquisa : " + this.term);
      if (this.term)
          this.listSystemAuditPageAndSearch();
      else
          this.listsystemAudit();
  }

  getRouterEdit(event: any) {
      this.edit = event;
      this.router.navigateByUrl("/auditoria/alterar/" + this.edit);

  }

  getRouterDelete(event: any) {
      this.delete = event;
      this.remove(this.delete);
  }

  getRouterCreate(event: any) {
      this.create = event;
      this.router.navigateByUrl("/auditoria/cadastro");
  }

  /**
   * 
   */
  listsystemAudit() {
      this.loading = true
      this.systemAudit$ = this.systemAuditService.list(
          this.paginator?.pageIndex ?? 0,
          this.paginator?.pageSize ?? 20,
          this.sort?.active ?? 'code',
          this.sort?.direction ?? 'asc'
      );
      //seta os valores nos inputs properties da tabela 
      this.systemAudit$.subscribe({
          next: (item) => {
              this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
              this.totalElements = JSON.parse(JSON.stringify(item)).totalElements;
              this.loading = false;
          },
          error: (e) => {
              console.info(e);
              if (e.status == 403)
                  this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
          },
          complete: () => console.info('complete')
      });
  }//fim listsystemAudit()

  /**
   * Função para retornar uma pagina do tipo systemAuditDTO
   * @returns retorna uma pagina contendo os dados consultados no servidor 
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.2.0
   */
  listSystemAuditPageAndSearch() {
      this.loading = true
      this.systemAudit$ = this.systemAuditService.listSystemAuditPagingAndSearching(
          this.paginator?.pageIndex ?? 0,
          this.paginator?.pageSize ?? 20,
          this.sort?.active ?? 'code',
          this.sort?.direction ?? 'asc',
          this.term ? this.term : ""
      );
      //seta os valores nos inputs properties da tabela 
      this.systemAudit$.subscribe(
          {
              next: (item) => {
                  this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
                  this.totalElements = JSON.parse(JSON.stringify(item)).totalElements;
                  this.loading = false;
              },
              error: (e) => {
                  console.info(e);
                  if (e.status == 403)
                      this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
              },
              complete: () => console.info('complete')
         });

}//fim listsystemAuditPageAndSearch()

/**
* Função para remover um registro permanentemente do banco de dados
* @param id contem o codigo do registro na tabela
* @author Paulo Roberto da Silva
* @version 1.2.0
* @since 1.0.0
* 
*/
remove(id: number) {
  const dialogoReferencia = this.matDialog.open(DialogConformationComponent);
  dialogoReferencia.afterClosed().subscribe((valorResposta) => {
      if (valorResposta) {
          this.systemAuditService.delete(id).subscribe(
              {
                next: (response) => {
                  this.matSnackBar.open("Item deletado com sucesso!", '', {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                window.location.reload();
                // this.router.navigateByUrl("/usuario");
                },
                error: (e) => {
                  console.log('Error Status: ' + e.status);
                  this.matSnackBar.open("Erro ao deletar", '', {
                      duration: 5000,
                      panelClass: "red-snackbar",
                  });
                },
                complete: () => {console.info('Complete')}

                
              
              
              });
      }// fim if()
  });
}

}
