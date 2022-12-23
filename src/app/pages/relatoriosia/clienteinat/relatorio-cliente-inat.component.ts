import { RepresentantiveService } from './../../representative/representantive.service';
import { Sac } from './../../sac/Sac.model';
import { Observable } from 'rxjs';
import { UserSiaService } from 'src/app/pages/userSia/user-sia.service';
import { ClientService } from 'src/app/pages/client/client.service';
import { SacService } from './../../sac/sac.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { ReasonComplaintService } from '../../reasonComplaint/reason-complaint.service';
import { SectorService } from '../../sector/sector.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientListModComponent } from 'src/app/_shared/client-list-mod/client-list-mod.component';

@Component({
  selector: 'app-relatorio-cliente-inat',
  templateUrl: './relatorio-cliente-inat.component.html',
  styleUrls: ['./relatorio-cliente-inat.component.scss']
})
export class RelatorioClienteInatComponent implements OnInit {

  nameContent: string = 'Relatório de Cliente Inativado';//my-toolbar

  sac$!: Observable<Sac[]>;
    inactive = false;
    sac!: Observable<Sac>;

  constructor(
    private matSnackBar: MatSnackBar,
    private router: Router,
    public matDialog: MatDialog,
    private sacService: SacService,
    private clientService: ClientService,
    private productService: ProductService,
    private userSiaService: UserSiaService,
    private reasonComplaintService: ReasonComplaintService,
    private sectorService : SectorService
  ) { }

  ngOnInit(): void {
  }


  /*Colocando os dados para controlar os elementos html do template*/
  //captura o elemento no DOM
  @ViewChild('protocol', { static: true })
  protocol!: ElementRef;//contem o valor do input
  @ViewChild('erpClient', { static: true })
  erpClient!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('codeClient', { static: true })
  codeClient!: ElementRef; //contem o valor do input
  @ViewChild('nameClient', { static: true })
  nameClient!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('dateinitial', { static: true })
  dateinitial!: ElementRef; //contem o valor do datepicker
  //captura o elemento no DOM
  @ViewChild('datefinal', { static: true })
  datefinal!: ElementRef; //contem o valor do datepicker
  //captura o elemento no DOM
  @ViewChild('user', { static: true })
  user!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameUser', { static: true })
  nameUser!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('product', { static: true })
  product!: ElementRef; //contem o valor do input
  @ViewChild('nameProduct', { static: true })
  nameProduct!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('complaint', { static: true })
  complaint!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameComplaint', { static: true })
  nameComplaint!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('sector', { static: true })
  sector!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameSector', { static: true })
  nameSector!: ElementRef; //contem o valor do input

  //captura o elemento no DOM
  @ViewChild('nfe', { static: true })
  nfe!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('devolution', { static: true })
  devolution!: ElementRef; //contem o valor do input
  //captura o elemento no DOM
  @ViewChild('code', { static: true })
  code_!: ElementRef; //contem o valor do input
  //apenas para resolver o problema do parametro da rota
  unitLogged!: number;


  /*
   Colocando os dados para receber os inputs properties
   */
  displayedColumns: string[] = ['code', 'lastSectorSent', 'nameClient', 'clientContactDateView', 'statusColumnTable'];//nome da coluna do json que será percorrido
  dataSource: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumns: string[] = ['CODIGO', 'ULTIMO SETOR ENVIADO', 'CLIENTE', 'CONTATO CLIENTE', 'STATUS'];//nome da coluna que será exibido no html usado como rotulo
  pageable: any;//recebe o conteudo da paginação a cada requisição
  totalElements!: number;
  loading = false;
  sort!: MatSort;
  paginator: any;
  term!: string;//recebe o termo da pesquisa dentro do input da tabela.
  edit: any;//recebe a url para tela de edição do usuario
  delete: any;//recebe uma função
  create: any;//recebe a url para tela de criação do usuario

  noReturn = true;
  //Para manipulacao dos checkboxes de status
  statusPending = true;
  statusProgress = true;
  statusFinished = false;
  status!: string;

  //Para manipulacao dos checkboxes de classification
  ckbQuality = true;
  ckbDevolution = true;
  ckbOccurrence = true;
  ckbOthers = true;
  ckbFfo = true;
  ckbInformative = true;
  ckbExport = true;
  classification!: string;


  /*controle dos checkboxes*/

//eventos para captura de valores do checkboxes de status
  getValueStatusProgress(value: boolean) {
    this.statusProgress = value;
}
getValueStatusFinished(value: boolean) {
    this.statusFinished = value;
}


  /**
   * Função é disparada após a renderização do componente
   */
  ngAfterViewInit() {
  }

  /**
 * Função para capturar o Objeto do tipo MatSort dentro do component my-table
 * @returns MatSort
 */
  // getMatSort(event: any): void {
  //     this.sort = event;
  //     console.log("Ecoando na Ordenação:   " + this.sort?.direction);
  //     this.listSac();
  // }

  // getMatPaginator(event: any) {

  //     this.paginator = event;
  //     console.log("Ecoando na Paginação:   " + this.paginator?.page);
  //     this.listSac();
  // }


  // getSearchAll(event: any) {
  //     this.term = event;
  //     console.log("Captura da Pesquisa : " + this.term);
  //     this.listSac();
  // }

  getRouterEdit(event: any) {
      this.edit = event;
      this.router.navigateByUrl("/sac/alterar/" + this.edit);

  }

  getRouterDelete(event: any) {
      this.delete = event;
  }

  getRouterCreate(event: any) {
      this.create = event;
      this.router.navigateByUrl("/sac/cadastro");
  }

  compareToDate(dateInitial: Date, dateFinal: Date): boolean {

      if (dateFinal < dateInitial) {
          this.matSnackBar.open("Data Final não pode ser menor que a data inicial", '', {
              duration: 5000,
              panelClass: "yellow-snackbar",
          });
          return true;
      }
      return false;
  }

  /**
   * Função para inverter uma data no formato brasileiro em formato americano
   * @param date_ uma data que será invertida
   * @returns string de data no formato(YYYY-MM-DD)
   */
  reverseDateString(date_: string) {
      let newDate_ = date_.split('/').reverse().join('-');
      console.log(newDate_);
      return newDate_;
  }



    /**
    *
    * @returns Busca um Usuário pelo codigo gerado pelo SIA
    */
    getUserResponsible() {
        this.nameUser.nativeElement.value = "";
        let value_ = this.user.nativeElement.value;
        if (!value_)
            return;
        this.userSiaService.findId(value_).subscribe({
            next: (item) => {
                if (item)
                    this.nameUser.nativeElement.value = item.name;
                else {

                    this.matSnackBar.open("Não há Usuário com o id informado", '', {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });

                }
            },
            error: (e) => {
                console.log(e);
                this.matSnackBar.open("Falha ao buscar Usuário", '', {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            },
            complete: () => { console.info("complete") }
        });

    }

    /**
  *
  * @returns Busca um Motivo da Reclamação pelo codigo gerado pelo SIA
  */
    getReasonComplaint() {
        this.nameComplaint.nativeElement.value = "";
        let value_ = this.complaint.nativeElement.value;
        if (!value_)
            return;
        this.reasonComplaintService.findId(value_).subscribe({
            next: (item) => {
                if (item)
                    this.nameComplaint.nativeElement.value = item.name;
                else {

                    this.matSnackBar.open("Não há Motivo da Reclamação com o id informado", '', {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });

                }
            },
            error: (e) => {
                console.log(e);
                this.matSnackBar.open("Falha ao buscar Motivo da Reclamação", '', {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            },
            complete: () => { console.info("complete") }
        });

    }


  /**
   *
   */
  // listSac() {

  //     if (this.compareToDate(this.dateinitial.nativeElement.value, this.datefinal.nativeElement.value))
  //         return;
  //     //muda o formato da data de brasileiro para americano
  //     this.loading = true
  //     this.sac$ = this.sacService.list(
  //         this.protocol.nativeElement.value,
  //         this.codeClient.nativeElement.value,
  //         this.reverseDateString(this.dateinitial.nativeElement.value),
  //         this.reverseDateString(this.datefinal.nativeElement.value),
  //         this.user.nativeElement.value,
  //         this.product.nativeElement.value,
  //         this.complaint.nativeElement.value,
  //         this.sector.nativeElement.value,
  //         this.nfe.nativeElement.value,
  //         this.devolution.nativeElement.value,
  //         this.code_.nativeElement.value,
  //         // this.fillStatus(),
  //         // this.fillClassification(),
  //         this.noReturn,
  //         this.unitLogged,
  //         this.paginator?.pageIndex ?? 0,
  //         this.paginator?.pageSize ?? 20,
  //         this.sort?.active ?? 'code',
  //         this.sort?.direction ?? 'asc'
  //     );
  //     //seta os valores nos inputs properties da tabela
  //     this.sac$.subscribe({
  //         next: (item: any) => {
  //             this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
  //             this.totalElements = JSON.parse(JSON.stringify(item)).totalElements;
  //             this.loading = false;
  //         },
  //         error: (e:any) => {
  //             console.info(e);
  //             this.matSnackBar.open("Erro ao listar Clientes", '', {
  //                 duration: 5000,
  //                 panelClass: "red-snackbar",
  //             });
  //         },
  //         complete: () => {console.info('complete')}
  //     });

  // }//fim listSac()

  getSector() {
    this.nameSector.nativeElement.value = "";
    let value_ = this.sector.nativeElement.value;
    if (!value_)
        return;
    this.sectorService.findId(value_).subscribe({
        next: (item) => {
            if (item)
                this.nameSector.nativeElement.value = item.name;
            else {

                this.matSnackBar.open("Não há Setor com o id informado", '', {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });

            }
        },
        error: (e) => {
            console.log(e);
            this.matSnackBar.open("Falha ao buscar Setor", '', {
                duration: 5000,
                panelClass: "red-snackbar",
            });
        },
        complete: () => { console.info("complete") }
    });

}
  /**
   * Busca um cliente pelo codigo gerado pelo SIA
   *
   * @returns um objeto de Client
   */
  getClientForERP() {
      this.codeClient.nativeElement.value = "";
      this.nameClient.nativeElement.value = "";
      let value_ = this.erpClient.nativeElement.value;
      if (!value_)
          return;
      this.clientService.findErp(value_).subscribe({
          next: (item) => {
              if (item) {
                  this.codeClient.nativeElement.value = item.code;
                  this.nameClient.nativeElement.value = item.name;

              }
              else {

                  this.matSnackBar.open("Não há cliente com o id informado", '', {
                      duration: 5000,
                      panelClass: "green-snackbar",
                  });

              }
          },
          error: (e) => {
              console.log(e);
              this.matSnackBar.open("Falha ao buscar cliente", '', {
                  duration: 5000,
                  panelClass: "red-snackbar",
              });
          },
          complete: () => { },
      });

  }

  limpar() { /* TODO document why this method 'limpar' is empty */ }

  print() { /* TODO document why this method 'print' is empty */ }

  back() {
    this.router.navigateByUrl("/sac");
  }


  /**
   *
   * @returns Busca um cliente pelo codigo gerado pelo SIA
   */
  getClientForCode() {
      this.erpClient.nativeElement.value = "";
      this.nameClient.nativeElement.value = "";
      let value_ = this.codeClient.nativeElement.value;
      if (!value_)
          return;
      this.clientService.findId(value_).subscribe({
          next: (item) => {
              if (item) {
                  this.erpClient.nativeElement.value = item.clientErp;
                  this.nameClient.nativeElement.value = item.name;

              }
              else {

                  this.matSnackBar.open("Não há cliente com o id informado", '', {
                      duration: 5000,
                      panelClass: "green-snackbar",
                  });

              }
          },
          error: (e) => {
              console.log(e);
              this.matSnackBar.open("Falha ao buscar cliente", '', {
                  duration: 5000,
                  panelClass: "red-snackbar",
              });
          },
          complete: () => { },
      });

  }






/* modais*/
  openModalClient()
  {
    this.matDialog.open (ClientListModComponent);
    }

    openModalMotivoinat()
  {
    this.matDialog.open (RelatorioClienteInatComponent);
    }
    openModalrepresentative()
    {
      this.matDialog.open (RepresentantiveService);
      }

  }

