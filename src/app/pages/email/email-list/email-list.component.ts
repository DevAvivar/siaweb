import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogConformationComponent } from 'src/app/_shared/dialogConfirmation/dialog-conformation.component';
import { UserSiaService } from '../../userSia/user-sia.service';
import { Email } from '../Email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  nameContent: string = 'Lista de Email';

  emails$!: Observable<Email[]>;
  emails!: Observable<Email>;
  /*
  Colocando os dados para receber os inputs properties
  */
  displayedColumns: string[] = ['code', 'destinationEmail'];//nome da coluna do json que será percorrido
  dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumns: string[] = ['CODIGO', 'EMAIL'];//nome da coluna que será exibido no html usado como rotulo
  pageable: any;//recebe o conteudo da paginação a cada requisição
  totalElements!: number;
  loading: boolean = false;
  sort!: MatSort;
  paginator!: MatPaginator;
  term!: string;//recebe o termo da pesquisa dentro do input da tabela.
  edit: any;//recebe a url para tela de edição do email
  delete: any;//recebe uma função 
  create: any;//recebe a url para tela de cadastro do email

formGroupPesquisa!: UntypedFormGroup;
constructor(
    private emailsService: EmailService, 
    private matSnackBar: MatSnackBar, 
    private formBuilder: UntypedFormBuilder,  
    private router: Router,
    public matDialog: MatDialog,
    private userSiaService: UserSiaService
    ) { }

ngOnInit(): void {

  this.listEmails();
}

 /**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
  getMatSort(event: any) 
  {
      this.sort = event;
      console.log("Ecoando na Ordenação:   "+this.sort?.direction);
      if(this.term )
      this.listEmailsPageAndSearch();
  else
      this.listEmails();
  }

  getMatPaginator(event: any){

      this.paginator = event;
      console.log("Ecoando na Paginação:   "+this.paginator?.page);
      if(this.term )
      this.listEmailsPageAndSearch();
  else
      this.listEmails();
  }
 

  getSearchAll(event: any){
      this.term = event;
      console.log("Captura da Pesquisa : "+this.term);
      if(this.term )
          this.listEmailsPageAndSearch();
      else
          this.listEmails();
  }

  getRouterEdit(event: any)
  {
      this.edit = event;
      this.router.navigateByUrl("/email/alterar/"+this.edit);
  }

  getRouterDelete(event: any)
  {
      this.delete = event;
      this.remove(this.delete);
  }

  getRouterCreate(event: any)
  {
      this.create = event;
      this.router.navigateByUrl("/email/cadastro");

  }

  /**
   * 
   */
  listEmails(){
      this.loading = true
      this.emails$ = this.emailsService.list(
          this.paginator?.pageIndex ?? 0,
          this.paginator?.pageSize ?? 20,
          this.sort?.active ?? 'code',
          this.sort?.direction ?? 'asc'
      );
      //seta os valores nos inputs properties da tabela 
      this.emails$.subscribe(
         {
           next: (item) =>{
            this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content );
            this.totalElements = JSON.parse(JSON.stringify(item)).totalElements;
            this.loading = false;
           },
           error: (e) => {
            if(e.status == 403)
            this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
           },
           complete: () => {console.info('Complete')}
          });    
  }//fim listUserSia()
  
  /**
   * Função para retornar uma pagina do tipo UserSiaDTO
   * @returns retorna uma pagina contendo os dados consultados no servidor 
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.2.0
   */
  listEmailsPageAndSearch() {
      this.loading = true
      this.emails$ = this.emailsService.listEmailsPagingAndSearching(
          this.paginator?.pageIndex ?? 0,
          this.paginator?.pageSize ?? 20,
          this.sort?.active ?? 'code',
          this.sort?.direction ?? 'asc',
          this.term ? this.term : ""
      );
        //seta os valores nos inputs properties da tabela 
        this.emails$.subscribe(
          {
            next: (item) => {
              this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content );
          this.totalElements = JSON.parse(JSON.stringify(item)).TotalElements;
          this.loading = false;
            },
            error: (e) => {
              if(e.status == 403)
             this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
       
            },
            complete: () => {console.info('Complete')}
          });     
      }
      


  /**
   * função para remover permanentemente um registro do banco de dados
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @sice 1.0.0
   */
   remove(id: number) {
    const dialogoReferencia = this.matDialog.open(DialogConformationComponent);
    dialogoReferencia.afterClosed().subscribe((valorResposta) => {
      if (valorResposta) {
        this.emailsService.delete(id).subscribe(
          {
            next: (response) => {
              this.matSnackBar.open("Email deletado com sucesso!", '', {
                duration: 5000,
                panelClass: "green-snackbar",
              });
              this.router.navigateByUrl("/email");
            },
            error: () => {
              this.matSnackBar.open("Erro ao deletar", '', {
                duration: 5000,
                panelClass: "red-snackbar",
              });
            },
            complete: () => { console.info('Complete') }

          });
      }
    });
  }
}
