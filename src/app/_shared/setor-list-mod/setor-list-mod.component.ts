import { Sector } from './../../pages/sector/Sector.model';
import { SectorService } from './../../pages/sector/sector.service';
import { SectorListModule } from './../../pages/sector/sectorList/sector-list.module';
import { SectorListComponent } from './../../pages/sector/sectorList/sector-list.component';
import { UserSiaService } from './../../pages/userSia/user-sia.service';
import { UserSia } from 'src/app/pages/userSia/UserSia.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setor-list-mod',
  templateUrl: './setor-list-mod.component.html',
  styleUrls: ['./setor-list-mod.component.scss']
})
export class SetorListModComponent implements OnInit {
  sector$!: Observable<Sector[]>;
  inactive = false;
  sector!: Observable<Sector>;

/*
     Colocando os dados para receber os inputs properties
     */
     displayedColumns: string[] = ['code', 'name', 'gerente'];//nome da coluna do json que será percorrido
     dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
     displayHeaderColumns: string[] = ['CODIGO', 'NOME', 'GERENTE'];//nome da coluna que será exibido no html usado como rotulo
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
    private sectorListService:SectorService,
    private userSiaService: UserSiaService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.sectorList();
  }
 /**
   * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
   * @returns MatSort
   */
    getMatSort(event: any) {
        this.sort = event;
        console.log("Ecoando na Ordenação:   " + this.sort?.direction);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
            this.sectorList();
    }

    getMatPaginator(event: any) {

        this.paginator = event;
        console.log("Ecoando na Paginação:   " + this.paginator?.page);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
            this.sectorList();
    }


    getSearchAll(event: any) {
        this.term = event;
        console.log("Captura da Pesquisa : " + this.term);
        // if (this.term)
        //     this.listUserSiaPageAndSearch();
        // else
            this.sectorList();
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
        // this.router.navigateByUrl("/usuario/cadastro");
    }

    /**
     *
     */
     sectorList() {
        this.loading = true
        this.sector$ = this.sectorListService.list(
            this.paginator?.pageIndex ?? 0,
            this.paginator?.pageSize ?? 20,
            this.sort?.active ?? 'code',
            this.sort?.direction ?? 'asc'
        );
        //seta os valores nos inputs properties da tabela
        this.sector$.subscribe({
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



    openModalUser(){

    }
close(){

}
}
