import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Unit } from '../unit/Unit.model';
import { UserSiaService } from '../userSia/user-sia.service';

@Component({
  selector: 'app-unit-user-session',
  templateUrl: './unit-user-session.component.html',
  styleUrls: ['./unit-user-session.component.scss']
})
export class UnitUserSessionComponent implements OnInit {

  nameContent: string = 'Defina uma Unidade';//my-toolbar

    userUnit$!: Observable<Unit[]>;
    inactive = false;
    userUnit!: Observable<Unit>;

    /*
     Colocando os dados para receber os inputs properties
     */
    displayedColumns: string[] = ['code', 'name'];//nome da coluna do json que será percorrido
    dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
    displayHeaderColumns: string[] = ['CODIGO', 'NOME'];//nome da coluna que será exibido no html usado como rotulo
    pageable: any;//recebe o conteudo da paginação a cada requisição
    totalElements!: number;
    loading = false;
    sort!: MatSort;
    paginator: any;
    term!: string;//recebe o termo da pesquisa dentro do input da tabela.
    edit: any;//recebe a url para tela de edição do usuario
    delete: any;//recebe uma função 
    create: any;//recebe a url para tela de criação do usuario
    confirm: any;


    constructor(
        private userSiaService: UserSiaService,
        private matSnackBar: MatSnackBar,
        private router: Router,
        public matDialog: MatDialog
    ) { }

    ngOnInit(): void {

        this.listUserUnitSession();//por default todos os parametros sao nulos
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
            this.listUserUnitSession();
    }

    getMatPaginator(event: any) {

        this.paginator = event;
        console.log("Ecoando na Paginação:   " + this.paginator?.page);      
            this.listUserUnitSession();
    }


    getSearchAll(event: any) {
        this.term = event;
        console.log("Captura da Pesquisa : " + this.term);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
        //     this.listUserSia();
    }

    getRouterEdit(event: any) {
        this.edit = event;
        // this.router.navigateByUrl("/usuario/alterar/" + this.edit);

    }

    getRouterDelete(event: any) {
        this.delete = event;
        // this.remove(this.delete);
    }

    getRouterCreate(event: any) {
        this.create = event;
        this.router.navigateByUrl("/usuario/cadastro");
    }

    getRouterConfirm(event: any) {
      this.confirm = event;
      this.userSiaService.findUnitSession(this.confirm).subscribe(
        {
            next:(item)=>{
                if(item)
                    localStorage.removeItem("unitLogged");//remove a chave
                this.userSiaService.setLocalStorageUnit(item);//cria o localstorage
                if(this.userSiaService.getLocalStorageUnit())
                    this.router.navigateByUrl("/principal");
            },
            error:(e)=>{
                console.log(e);
            },
            complete:()=>{console.info('complete')}
        });
  }

    /**
     * 
     */
    listUserUnitSession() {
        this.loading = true
        this.userUnit$ = this.userSiaService.listUnitSession(
            this.paginator?.pageIndex ?? 0,
            this.paginator?.pageSize ?? 20,
            this.sort?.active ?? 'code',
            this.sort?.direction ?? 'asc'
        );
        //seta os valores nos inputs properties da tabela 
        this.userUnit$.subscribe({
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
    }//fim listUserSia()
 


}

