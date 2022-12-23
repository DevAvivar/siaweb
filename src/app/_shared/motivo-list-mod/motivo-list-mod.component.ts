import { ReasonComplaintService } from './../../pages/reasonComplaint/reason-complaint.service';
import { ReasonComplaint } from './../../pages/reasonComplaint/ReasonComplaint.model';
import { UserSia } from 'src/app/pages/userSia/UserSia.model';
import { UserSiaService } from './../../pages/userSia/user-sia.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-motivo-list-mod',
  templateUrl: './motivo-list-mod.component.html',
  styleUrls: ['./motivo-list-mod.component.scss']
})
export class MotivoListModComponent implements OnInit {
  motivorecSia$!: Observable<ReasonComplaint[]>;
  inactive = false;
  motivorecSia!: Observable<ReasonComplaint>;

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

  constructor(
    private motivorecSiaService: ReasonComplaintService,
    private userSiaService: UserSiaService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.listMotivorec();
  }
 /**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
    getMatSort(event: any) {
        this.sort = event;
        console.log("Ecoando na Ordenação:   " + this.sort?.direction);
        // if (this.term)
        //     this.();
        // else
            this.listMotivorec();
    }


    getMatPaginator(event: any) {

        this.paginator = event;
        console.log("Ecoando na Paginação:   " + this.paginator?.page);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
            this.listMotivorec();
    }


    getSearchAll(event: any) {
        this.term = event;
        console.log("Captura da Pesquisa : " + this.term);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
            this.listMotivorec();
    }

    getRouterEdit(event: any) {
        this.edit = event;
        this.router.navigateByUrl("/usuario/alterar/" + this.edit);

    }

    getRouterDelete(event: any) {
        this.delete = event;

    }

    getRouterCreate(event: any) {
        this.create = event;
        this.router.navigateByUrl("/usuario/cadastro");
    }

    /**
     *
     */
    listMotivorec() {
        this.loading = true
        this.motivorecSia$ = this.motivorecSiaService.list(
            this.paginator?.pageIndex ?? 0,
            this.paginator?.pageSize ?? 20,
            this.sort?.active ?? 'code',
            this.sort?.direction ?? 'asc'
        );
        //seta os valores nos inputs properties da tabela
        this.motivorecSia$.subscribe({
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
    }


    openModalMotivorec() {

    }
close(){
}
}
