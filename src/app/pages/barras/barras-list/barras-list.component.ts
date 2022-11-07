import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSiaService } from '../../userSia/user-sia.service';
import { Barras } from '../barras.model';
import { BarrasService } from '../barras.service';

@Component({
  selector: 'app-barras-list',
  templateUrl: './barras-list.component.html',
  styleUrls: ['./barras-list.component.scss']
})
export class BarrasListComponent implements OnInit {

  nameContent: string = 'Barras Integradas';
  barras$!: Observable<Barras[]>;
    inactive = false;
    barras!: Observable<Barras>;

      /*
    Colocando os dados para receber os inputs properties
    */
    displayedColumns: string[] = ['id', 'barra', 'data', 'dtapont', 'hora', 'turno', 'barsta', 'barlog', 'ipCamRead'];//nome da coluna do json que será percorrido
    dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
    displayHeaderColumns: string[] = ['CODIGO', 'BARRA', 'DATA', 'APONTAMENTO' , 'HORA', 'TURNO', 'STATUS', 'LOG', 'IP CAMERA'];//nome da coluna que será exibido no html usado como rotulo
    pageable: any;//recebe o conteudo da paginação a cada requisição
    totalElements!: number;
    loading = false;
    sort!: MatSort;
    paginator!: MatPaginator;
    term!: string;//recebe o termo da pesquisa dentro do input da tabela.
    edit: any;//recebe a url para tela de edição do usuario
    delete: any;//recebe uma função 
    create: any;//recebe a url para tela de criação do usuario
    showButtons!: boolean;

    /*Este atributo foi adicionado especialmente para o modelo de Barras devido o 
    fato da modelagem ser diferente da convenção adotada nos outros modelos da aplicação 
    o valor para a coluna de chave primaria é nesse cado (ID) os demais são (CODE)*/
    active: any; //recebe o valor da coluna que foi selecionada na tabela 

    constructor(
      private barrasService: BarrasService,
      private matSnackBar: MatSnackBar, 
      private router: Router,
      public matDialog: MatDialog,
      private userSiaService: UserSiaService
      ) { }

  ngOnInit(): void {
    this.showButtons = true;//define se mostrará os botões flutuantes de create edit e delete 
    this.listBarras();
  }

    /**
     * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
     * @returns MatSort
     */
     getMatSort(event: any) 
     {
         this.sort = event;
         console.log("Ecoando na Ordenação:   "+this.sort?.active);
         this.listBarras()
     }
 
     getMatPaginator(event: any){
 
         this.paginator = event;
         console.log("Ecoando na Paginação:   "+this.paginator.pageSize);
         this.listBarras();
     }
    
 
     getSearchAll(event: any){
         this.term = event;
         console.log("Captura da Pesquisa : "+this.term);
         if(this.term.length > 0)
             this.listBarrasPageAndSearch();
         else
             this.listBarras();
     }
 
     getRouterEdit(event: any)
     {
         this.edit = event;
        //  this.router.navigateByUrl("/barras/alterar/"+this.edit);
 
     }
 
     getRouterDelete(event: any)
     {
         this.delete = event;
        //  this.remove(this.delete);
     }
 
     getRouterCreate(event: any)
     {
         this.create = event;
        //  this.router.navigateByUrl("/barras/cadastro");
     }
 
     /**
      * 
      */
     listBarras(){
         this.loading = true
         this.barras$ = this.barrasService.list(
             this.paginator?.pageIndex ?? 0,
             this.paginator?.pageSize ?? 20,
             this.sort?.active ?? 'id',
             this.sort?.direction ?? 'asc'
         );
         //seta os valores nos inputs properties da tabela 
         this.barras$.subscribe(
           {
           next: (item) => {
             let listBars = JSON.parse(JSON.stringify(item)).content;
             let el = JSON.parse(JSON.stringify(item)).totalElements;
           for(let i = 0; i < listBars.length; i++)
           {
             if(listBars[i].barlog == '+')
              listBars[i].barlog = "Integrada";
             if(listBars[i].turno == 0)
              listBars[i].turno = "";
           }
             this.dataSource = new MatTableDataSource(listBars);
             this.totalElements = el;
             this.loading = false;
             // console.log("Paginacao :   " + this.paginator);
         },
         error: (error) => {
             if(error.status == 403)
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
     listBarrasPageAndSearch() {
         this.loading = true
         this.barras$ = this.barrasService.listBarrasPagingAndSearching(
             this.paginator?.pageIndex ?? 0,
             this.paginator?.pageSize ?? 20,
             this.sort?.active ?? 'id',
             this.sort?.direction ?? 'asc',
             this.term ? this.term : ""
         );
           //seta os valores nos inputs properties da tabela 
           this.barras$.subscribe(
            {
            next: (item) => {
              let listBars = JSON.parse(JSON.stringify(item)).content;
              let el = JSON.parse(JSON.stringify(item)).totalElements;
            for(let i = 0; i < listBars.length; i++)
            {
              if(listBars[i].barlog == '+')
               listBars[i].barlog = "Integrada";
              if(listBars[i].turno == 0)
               listBars[i].turno = "";
            }
              this.dataSource = new MatTableDataSource(listBars);
              this.totalElements = el;
              this.loading = false;
              // console.log("Paginacao :   " + this.paginator);
          },
          error: (error) => {
              if(error.status == 403)
                 this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
           },
           complete: () => {console.info('Complete')}
           
           });
     }// fim
  

}
