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
import { Camera } from '../camera.model';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {


   nameContent: string = 'Lista de Camera';//my-toolbar

    camera$!: Observable<Camera[]>;
    inactive = false;
    camera!: Observable<Camera>;

  /*
    Colocando os dados para receber os inputs properties
    */
    displayedColumns: string[] = ['code', 'name', 'ip', 'shift', 'started', 'productionDate'];//nome da coluna do json que será percorrido
    dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
    displayHeaderColumns: string[] = ['CODIGO', 'NOME', 'IP', 'TURNO', 'INICIADA', 'PRODUÇÃO'];//nome da coluna que será exibido no html usado como rotulo
    pageable: any;//recebe o conteudo da paginação a cada requisição
    totalElements!: number;
    loading = false;
    sort!: MatSort;
    paginator!: MatPaginator;
    term!: string;//recebe o termo da pesquisa dentro do input da tabela.
    edit: any;//recebe a url para tela de edição da camera
    delete: any;//recebe uma função 
    create: any;//recebe a url para tela de cadastro da camera
    errorMsg: any;
    sorteio: any = [
        [1,2,3,4,6,9,11,12,13,16,18,19,20,22,25],//2643
        [2,4,5,8,9,13,14,15,16,17,19,20,21,22,24],//2642
        [1,3,4,5,7,8,9,12,13,14,17,19,20,23,24],//2641
        // [3,6,7,9,10,11,12,14,15,16,18,19,21,22,25],//2640
        // [2,3,7,8,9,11,12,14,15,16,18,20,21,22,24],//2639
        // [2,4,5,9,10,12,14,15,18,19,21,22,23,24,25],//2638
        // [2,4,5,8,9,10,12,13,19,20,21,22,23,24,25],//2637
        // [1,3,4,5,7,8,9,10,11,13,15,18,22,24,25],//2636
        // [2,4,5,6,8,10,11,13,14,15,17,20,21,23,25],//2635
        // [1,2,3,4,7,9,10,14,15,16,18,20,21,22,24],//2634
        // [1,3,4,6,9,11,12,14,15,16,17,18,19,24,25],//2633
        // [1,4,5,7,9,11,12,13,15,16,17,19,20,21,22],//2632
        // [2,4,5,6,7,8,11,14,17,18,19,20,21,23,24],//2631
        // [1,2,3,6,8,9,10,13,14,16,17,20,21,22,25],//2630
        // [2,3,4,5,6,7,9,10,12,13,14,19,21,22,25],//2629
        // [1,4,9,10,11,12,13,14,15,17,20,21,22,23,25],//2628
        // [1,3,7,8,9,10,13,14,16,17,20,21,22,24,25],//2627
        // [3,4,5,6,8,10,11,12,13,14,17,20,22,23,24]//2626

    ];

    exibeResult: any = []; 


    constructor(
        private cameraService: CameraService,
        private matSnackBar: MatSnackBar,
        private router: Router,
        public matDialog: MatDialog,
        private userSiaService: UserSiaService
    ) { }

    ngOnInit(): void {

        this.listCamera();//por default todos os parametros sao nulos

        this.viciados(this.sorteio);
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
            this.listCameraPageAndSearch();
        else
            this.listCamera();
    }

    getMatPaginator(event: any) {

        this.paginator = event;
        console.log("Ecoando na Paginação:   " + this.paginator?.page);
        if (this.term)
            this.listCameraPageAndSearch();
        else
            this.listCamera();
    }


    getSearchAll(event: any) {
        this.term = event;
        console.log("Captura da Pesquisa : " + this.term);
        if (this.term)
            this.listCameraPageAndSearch();
        else
            this.listCamera();
    }

    getRouterEdit(event: any) {
        this.edit = event;
        this.router.navigateByUrl("/camera/alterar/" + this.edit);

    }

    getRouterDelete(event: any) {
        this.delete = event;
        this.remove(this.delete);
    }

    getRouterCreate(event: any) {
        this.create = event;
        this.router.navigateByUrl("/camera/cadastro");
    }

    /**
     * 
     */
    listCamera() {
        this.loading = true
        this.camera$ = this.cameraService.list(
            this.paginator?.pageIndex ?? 0,
            this.paginator?.pageSize ?? 20,
            this.sort?.active ?? 'code',
            this.sort?.direction ?? 'asc'
        );
        //seta os valores nos inputs properties da tabela 
        this.camera$.subscribe({
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
    }//fim listcamera()

    /**
     * Função para retornar uma pagina do tipo cameraDTO
     * @returns retorna uma pagina contendo os dados consultados no servidor 
     * @author Paulo Roberto da Silva
     * @version 1.2.0
     * @since 1.2.0
     */
    listCameraPageAndSearch() {
        this.loading = true
        this.camera$ = this.cameraService.listCameraPagingAndSearching(
            this.paginator?.pageIndex ?? 0,
            this.paginator?.pageSize ?? 20,
            this.sort?.active ?? 'code',
            this.sort?.direction ?? 'asc',
            this.term ? this.term : ""
        );
        //seta os valores nos inputs properties da tabela 
        this.camera$.subscribe(
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

}//fim listcameraPageAndSearch()

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
            this.cameraService.delete(id).subscribe(
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

/**
 * Função para manipular a quantidade de aparição de numero dentro do espaço amostral da lotofacil
 * @param array 
 */
viciados(array: any)
{
    for(let i = 1; i < 26; i++)
    {
        let viciado = 0;
        array.map( (item: any) => {            
            
            item.map((n: any)=>{
                if(i == n)
                    viciado++;
            })
        }
        );
        this.exibeResult.push(`${i} = ${viciado}`);
    }
    console.log(this.exibeResult);
}



}
