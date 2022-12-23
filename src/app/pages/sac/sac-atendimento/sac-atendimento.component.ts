
import { ClientListModComponent } from 'src/app/_shared/client-list-mod/client-list-mod.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoSacmodComponent } from 'src/app/_shared/produto-sacmod/produto-sacmod.component';
import { ClientService } from '../../client/client.service';
import { ProductService } from '../../product/product.service';
import { ReasonComplaintService } from '../../reasonComplaint/reason-complaint.service';
import { SectorService } from '../../sector/sector.service';
import { UserSiaService } from '../../userSia/user-sia.service';
import { Sac } from '../Sac.model';
import { SacService } from '../sac.service';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CareChannelService } from '../../careChannel/care-channel.service';
import { CrossCdService } from '../../crossCd/cross-cd.service';
import { RepresentantiveService } from '../../representative/representantive.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { SacProductService } from '../../sacProduct/sac-product.service';
import { SacProductViewTable } from '../../sacProduct/SacProductViewTable.model';
import { SacMediaViewTable } from '../../sacMedia/SacMediaViewTable.model';
import { SacMediaService } from '../../sacMedia/sac-media.service';
import { SacExpenseRecipeViewTable } from '../../sacExpenseRecipe/SacExpenseRecipeViewTable.model';
import { SacExpenseRecipeService } from '../../sacExpenseRecipe/sac-expense-recipe.service';
import { MatRadioChange } from '@angular/material/radio';
import { DriverService } from '../../driver/driver.service';
import { ShippingCompanyService } from '../../shippingCompany/shipping-company.service';
import { SacItemService } from '../../sacItem/sac-item.service';
import { SacItemViewTable } from '../../sacItem/SacItemViewTable.model';


@Component({
  selector: 'app-sac-atendimento',
  templateUrl: './sac-atendimento.component.html',
  styleUrls: ['./sac-atendimento.component.scss']
})
export class SacAtendimentoComponent implements OnInit, AfterViewInit {

  nameContent: string = 'Cadastro Atendimento SAC';//my-toolbar
  sacMaster!: Sac;//usado para criação e manipulação do modelo de SAC
  formGroup!: UntypedFormGroup;//quem recebe os valores dos elementos no template
  sacProduct$!: Observable<SacProductViewTable[]>;//recebe um Array de Observable de Produtos Sac
  sacMedia$!: Observable<SacMediaViewTable[]>;//recebe um Array de Observable de Media Sac
  sacExpenseRecipe$!: Observable<SacExpenseRecipeViewTable[]>;
  sacItem$!: Observable<SacItemViewTable[]>;

  //define o input para auxiliar no carregamento inicial para @ViewChild
  nameResAtt!: string;

  //Define o valor da captura do grupo de radio button
  radioStatus: number = 0;
  radioClassification: number = 0;
  radioTypeContact: number = 0;

  //definindo as propriedades para campos de data
  dateCreation: FormControl = new FormControl();//so recebe os valor dentro do datepicker se passar como formControl no biding dos parametros
  dateCreationTime: string = '';//recebe somente pela propriedade value ="" normal do input

  closingDate: FormControl = new FormControl();
  closingDateTime: string = '';

  clientContactDate: FormControl = new FormControl();
  clientContactDateTime: string = '';

  clientReturnDate: FormControl = new FormControl();
  clientReturnDateTime: string = '';

  /**
 * Tratando a aba atendidimento para eventos dos elementos html
 */

  //captura o elemento no DOM
  @ViewChild('codeResposibleOpenAtt', { static: false })
  codeResposibleOpenAtt!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameResposibleOpenAtt', { static: false })
  nameResposibleOpenAtt!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('codeResposibleAtt', { static: false })
  codeResposibleAtt!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameResposibleAtt', { static: false })
  nameResposibleAtt!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeSector', { static: false })
  codeSector!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameSector', { static: false })
  nameSector!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeCareChannel', { static: false })
  codeCareChannel!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameCareChannel', { static: false })
  nameCareChannel!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeClient', { static: false })
  codeClient!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('erpClient', { static: false })
  erpClient!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameClient', { static: false })
  nameClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('cpfCnpjClient', { static: false })
  cpfCnpjClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('emailClient', { static: false })
  emailClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('addressClient', { static: false })
  addressClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('houseNumberClient', { static: false })
  houseNumberClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('complementClient', { static: false })
  complementClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('neighborhoodClient', { static: false })
  neighborhoodClient!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('zipCodeClient', { static: false })
  zipCodeClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('cityClient', { static: false })
  cityClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('stateClient', { static: false })
  stateClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('nationClient', { static: false })
  nationClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('quantityPurchasesClient', { static: false })
  quantityPurchasesClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('averagePurchaseValueClient', { static: false })
  averagePurchaseValueClient!: ElementRef;//contem o valor do input


  //captura o elemento no DOM
  @ViewChild('codeRepresentative', { static: false })
  codeRepresentative!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameRepresentative', { static: false })
  nameRepresentative!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeRepresentativeSupervisor', { static: false })
  codeRepresentativeSupervisor!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameRepresentativeSupervisor', { static: false })
  nameRepresentativeSupervisor!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeRepresentativeSupervisorManager', { static: false })
  codeRepresentativeSupervisorManager!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameRepresentativeSupervisorManager', { static: false })
  nameRepresentativeSupervisorManager!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('telephoneClient', { static: false })
  telephoneClient!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeCrossCd', { static: false })
  codeCrossCd!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameCrossCd', { static: false })
  nameCrossCd!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeDriver', { static: false })
  codeDriver!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameDriver', { static: false })
  nameDriver!: ElementRef;//contem o valor do input

  //captura o elemento no DOM
  @ViewChild('codeShippingCompany', { static: false })
  codeShippingCompany!: ElementRef;//contem o valor do input
  //captura o elemento no DOM
  @ViewChild('nameShippingCompany', { static: false })
  nameShippingCompany!: ElementRef;//contem o valor do input



  /*
     Colocando os dados para receber os inputs properties produto SAC
     */
  displayedColumnsPr: string[] = ['code', 'nameProduct', 'nfe', 'quantityComplaint', 'nameReasonComplaint'];//nome da coluna do json que será percorrido
  dataSourcePr: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumnsPr: string[] = ['CODIGO', 'NOME', 'NF-e', 'QUANTIDADE RECLAMADA', 'MOTIVO'];//nome da coluna que será exibido no html usado como rotulo
  pageablePr: any;//recebe o conteudo da paginação a cada requisição
  totalElementsPr!: number;
  loadingPr = false;
  sortPr!: MatSort;
  paginatorPr: any;
  termPr!: string;//recebe o termo da pesquisa dentro do input da tabela.
  editPr: any;//recebe a url para tela de edição do usuario
  deletePr: any;//recebe uma função
  createPr: any;//recebe a url para tela de criação do usuario

  /*Colocando os dados para receber os inputs properties- midia
  */
  displayedColumnsMd: string[] = ['code', 'name', 'type', 'dateCreation'];//nome da coluna do json que será percorrido
  dataSourceMd: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumnsMd: string[] = ['Codigo', 'Nome', 'Tipo', 'Data Anexo'];//nome da coluna que será exibido no html usado como rotulo
  pageableMd: any;//recebe o conteudo da paginação a cada requisição
  totalElementsMd!: number;
  loadingMd = false;
  sortMd!: MatSort;
  paginatorMd: any;
  termMd!: string;//recebe o termo da pesquisa dentro do input da tabela.
  editMd: any;//recebe a url para tela de edição do usuario
  deleteMd: any;//recebe uma função
  createMd: any;//recebe a url para tela de criação do usuario


  /*Colocando os dados para receber os inputs properties- valores
   */
  displayedColumnsVr: string[] = ['code', 'nameExpenseRecipe', 'typeExpenseRecipe', 'moneyValue'];//nome da coluna do json que será percorrido
  dataSourceVr: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumnsVr: string[] = ['Código', 'Nome', 'Tipo', 'Valor'];//nome da coluna que será exibido no html usado como rotulo
  pageableVr: any;//recebe o conteudo da paginação a cada requisição
  totalElementsVr!: number;
  loadingVr = false;
  sortVr!: MatSort;
  paginatorVr: any;
  termVr!: string;//recebe o termo da pesquisa dentro do input da tabela.
  editVr: any;//recebe a url para tela de edição do usuario
  deleteVr: any;//recebe uma função
  createVr: any;//recebe a url para tela de criação do usuario

  /*Colocando os dados para receber os inputs properties- andamento
 */
  displayedColumnsAn: string[] = ['code', 'nameResponsableSector', 'nameResponsableUser', 'nameStatus'];//nome da coluna do json que será percorrido
  dataSourceAn: any;//o conteudo da requisição com o Json do objeto retornado na consulta ao backend
  displayHeaderColumnsAn: string[] = ['Codigo', 'Setor', 'Usuário Responsavel', 'Status'];//nome da coluna que será exibido no html usado como rotulo
  pageableAn: any;//recebe o conteudo da paginação a cada requisição
  totalElementsAn!: number;
  loadingAn = false;
  sortAn!: MatSort;
  paginatorAn: any;
  termAn!: string;//recebe o termo da pesquisa dentro do input da tabela.
  editAn: any;//recebe a url para tela de edição do usuario
  deleteAn: any;//recebe uma função
  createAn: any;//recebe a url para tela de criação do usuario

  /**
   * bloco dos checks classificação  classificationCheck
   */
  ckbQuality: boolean = false;
  ckbDevolution: boolean = false;
  ckbOccurrence: boolean = false;
  ckbOthers: boolean = false;
  ckbFfo: boolean = false;
  ckbInformative: boolean = false;
  ckbExport: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    public matDialog: MatDialog,
    private sacService: SacService,
    private clientService: ClientService,
    private productService: ProductService,
    private userSiaService: UserSiaService,
    private reasonComplaintService: ReasonComplaintService,
    private sectorService: SectorService,
    private activatedRoute: ActivatedRoute,
    private careChannelService: CareChannelService,
    private crossCdService: CrossCdService,
    private representaticeService: RepresentantiveService,
    private sacProductService: SacProductService,
    private sacMediaService: SacMediaService,
    private sacExpenseService: SacExpenseRecipeService,
    private driverService: DriverService,
    private shippingCompanyService: ShippingCompanyService,
    private sacItemService: SacItemService

  ) { }

  ngOnInit(): void {
    let param_id = this.activatedRoute.snapshot.params["id"];
    if (param_id > 0) {
      this.sacService.findId(param_id).subscribe(
        {
          next: (item: Sac) => {
            this.nameContent = 'Alterar  SAC';
            this.sacMaster = item;
            //setando os valores para usar no grupo de radio buttons
            this.radioStatus = typeof this.sacMaster == "undefined" ? 0 : this.sacMaster.status;
            this.radioClassification = typeof this.sacMaster == "undefined" ? 0 : this.sacMaster.attendanceClassification;
            this.radioTypeContact = typeof this.sacMaster == "undefined" ? 0 : this.sacMaster.typeContact;
            //setando os valores dos inputs de data
            this.dateCreation = new FormControl(new Date(this.separateDateHoursInString(this.sacMaster.dateCreation)));
            this.dateCreationTime = this.separateDateHoursInString(this.sacMaster.dateCreation, 'time');
            this.closingDate = new FormControl(new Date(this.separateDateHoursInString(this.sacMaster.closingDate)));
            this.closingDateTime = this.separateDateHoursInString(this.sacMaster.closingDate, 'time');

            this.clientContactDate = new FormControl(new Date(this.separateDateHoursInString(this.sacMaster.clientContactDate)));
            this.clientContactDateTime = this.separateDateHoursInString(this.sacMaster.clientContactDate, 'time');

            this.clientReturnDate = new FormControl(new Date(this.separateDateHoursInString(this.sacMaster.clientReturnDate)));
            this.clientReturnDateTime = this.separateDateHoursInString(this.sacMaster.clientReturnDate, 'time');
            //captura os valores vindo o backend para tratar os valores dinamicos de alguns inputs ao carregar a pagina
            // this.codeResposibleAttValue =
            this.fillForm();
            this.getResponsibleOpenAtt();
            this.getResponsibleAtt();
            this.getSectorResponsible();
            this.getCareChannel();
            this.getClient();
            this.getRepresentative();
            this.getRepresentativeSupervisor();
            this.getRepresentativeSupervisorManager();
            this.getCrossCd();
            this.getDriver();
            this.getShippingCompany();
            //listagem de Produto SAC
            this.listSacProduct();
            this.listSacMedia();
            this.listSacExpenseRecipe();
            this.listSacItem();
          },
          error: (e) => { alert("Não foi possível buscar o Usuário.\n Motivo: " + e.status) },
          complete: () => { console.info('Complete') }
        });
    }//fim if()

    //quando a pagina é carregada para criação de um  atendimento do SAC
    this.fillForm();  //preenche o formulario
    this.getResponsibleOpenAtt();
    //inicializando as variaveis de datas
    let creationDate = new Date().toISOString();
    this.dateCreation = new FormControl(new Date(this.separateDateHoursInString(creationDate)));
    this.dateCreationTime = this.separateDateHoursInString(creationDate, 'time');

  }// fim ngOnInit()

  ngAfterViewInit() {

  }

  testemodal() {
    this.matDialog.open(ProdutoSacmodComponent);
  }

  /*
  FUNÇÃO PARA MANIPULAÇÃO DE STRING DATE ISO
  */

  /**
   *
   * @param datetime contem o formato de data timestamp unix vindo o backend
   * @param flagHours contem o valor de 'date' por default para retornar data em formato de string caso o valor do parametro for 'time' retorna a hora do timestamp informado
   * @return uma data em formato de string para ser exibida dentro do input de datepicker
   * @author Paulo Roberto da Silva
   * @version 1
   * @since 1.0.0
   */
  separateDateHoursInString(datetime: any, flagHours: string = 'date'): string
  {

    if(typeof datetime == "undefined")
      return "";
      let dateManipulate: string = '';
    if(flagHours == 'date')
      dateManipulate = new Date(datetime).toISOString();
    else if(flagHours == 'time')
      dateManipulate = new Date(datetime).toLocaleTimeString().substring(0,5);

    return dateManipulate; //devolve data ou hora em formato string
  }





  /*
  CAPTURA DOS EVENTOS DOS RADIOS BUTTONS
  */
  getValueRadioGroupStatus(data: MatRadioChange) {
    console.log("radio button status: " + data.value);

  }

  getValueRadioGroupClassification(data: MatRadioChange) {
    console.log("radio button Classification: " + data.value);
  }



  /**
   * Destinado somente a Produto
   */
  /**
     * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
     * @returns MatSort
     */
  getMatSortPr(event: any) {
    this.sortPr = event;
    console.log("Ecoando na Ordenação:   " + this.sortPr?.direction);
    // this.listSac();
  }

  getMatPaginatorPr(event: any) {

    this.paginatorPr = event;
    console.log("Ecoando na Paginação:   " + this.paginatorPr?.page);
    // this.listSac();
  }


  getSearchAllPr(event: any) {
    this.termPr = event;
    console.log("Captura da Pesquisa : " + this.termPr);
    // this.listSac();
  }

  getRouterEditPr(event: any) {
    this.editPr = event;
    this.router.navigateByUrl("/sac/alterar/" + this.editPr);

  }

  getRouterDeletePr(event: any) {
    this.deletePr = event;
    //   this.remove(this.delete);
  }

  getRouterCreatePr(event: any) {
    this.createPr = event;
    this.router.navigateByUrl("/sac/cadastro");
  }


  /**
   * Listagem de produtos SAC com conteudo alterado para adaptar ao componente de my-table
   */
  listSacProduct() {
    this.loadingPr = true
    this.sacProduct$ = this.sacProductService.listSacProductViewTable(
      this.sacMaster.code,
      this.paginatorPr?.pageIndex ?? 0,
      this.paginatorPr?.pageSize ?? 20,
      this.sortPr?.active ?? 'code',
      this.sortPr?.direction ?? 'asc'
    );
    //seta os valores nos inputs properties da tabela
    this.sacProduct$.subscribe({
      next: (item) => {
        this.dataSourcePr = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
        this.totalElementsPr = JSON.parse(JSON.stringify(item)).totalElements;
        this.loadingPr = false;
      },
      error: (e) => {
        console.info(e);
        if (e.status == 403)
          this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
      },
      complete: () => console.info('complete')
    });
  }//fim listSacProduct()



  /**
   * Destinado somente a midia
   */

  /**
     * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
     * @returns MatSort
     */
   getMatSortMd(event: any) {
    this.sortMd = event;
    console.log("Ecoando na Ordenação:   " + this.sortMd?.direction);
    // this.listSac();
  }

  getMatPaginatorMd(event: any) {

    this.paginatorMd = event;
    console.log("Ecoando na Paginação:   " + this.paginatorMd?.page);
    // this.listSac();
  }


  getSearchAllMd(event: any) {
    this.termMd = event;
    console.log("Captura da Pesquisa : " + this.termMd);
    // this.listSac();
  }

  getRouterEditMd(event: any) {
    this.editMd = event;
    this.router.navigateByUrl("/sac/alterar/" + this.editMd);

  }

  getRouterDeleteMd(event: any) {
    this.deleteMd = event;
    //   this.remove(this.delete);
  }

  getRouterCreateMd(event: any) {
    this.createMd = event;
    this.router.navigateByUrl("/sac/cadastro");
  }

  /**
 * Listagem de Media do SAC com conteudo alterado para adaptar ao componente de my-table
 */
  listSacMedia() {
    this.loadingMd = true
    this.sacMedia$ = this.sacMediaService.listSacMediaViewTable(
      this.sacMaster.code,
      this.paginatorMd?.pageIndex ?? 0,
      this.paginatorMd?.pageSize ?? 20,
      this.sortMd?.active ?? 'code',
      this.sortMd?.direction ?? 'asc'
    );
    //seta os valores nos inputs properties da tabela
    this.sacMedia$.subscribe({
      next: (item) => {
        this.dataSourceMd = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
        this.totalElementsMd = JSON.parse(JSON.stringify(item)).totalElements;
        this.loadingMd = false;
      },
      error: (e) => {
        console.info(e);
        if (e.status == 403)
          this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
      },
      complete: () => console.info('complete')
    });
  }//fim listSacMedia()  listSacExpenseRecipeViewTable


/**
   * Destinado somente a valores
   */

  /**
     * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
     * @returns MatSort
     */
   getMatSortVr(event: any) {
    this.sortVr = event;
    console.log("Ecoando na Ordenação:   " + this.sortVr?.direction);
    // this.listSac();
  }

  getMatPaginatorVr(event: any) {

    this.paginatorVr = event;
    console.log("Ecoando na Paginação:   " + this.paginatorVr?.page);
    // this.listSac();
  }


  getSearchAllVr(event: any) {
    this.termVr = event;
    console.log("Captura da Pesquisa : " + this.termVr);
    // this.listSac();
  }

  getRouterEditVr(event: any) {
    this.editVr = event;
    this.router.navigateByUrl("/sac/alterar/" + this.editVr);

  }

  getRouterDeleteVr(event: any) {
    this.deleteVr = event;
    //   this.remove(this.delete);
  }

  getRouterCreateVr(event: any) {
    this.createVr = event;
    this.router.navigateByUrl("/sac/cadastro");
  }


  /**
* Listagem de Valores do SAC com conteudo alterado para adaptar ao componente de my-table
*/
  listSacExpenseRecipe() {
    this.loadingVr = true
    this.sacExpenseRecipe$ = this.sacExpenseService.listSacExpenseRecipeViewTable(
      this.sacMaster.code,
      this.paginatorVr?.pageIndex ?? 0,
      this.paginatorVr?.pageSize ?? 20,
      this.sortVr?.active ?? 'code',
      this.sortVr?.direction ?? 'asc'
    );
    //seta os valores nos inputs properties da tabela
    this.sacExpenseRecipe$.subscribe({
      next: (item) => {
        this.dataSourceVr = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
        this.totalElementsVr = JSON.parse(JSON.stringify(item)).totalElements;
        this.loadingVr = false;
      },
      error: (e) => {
        console.info(e);
        if (e.status == 403)
          this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
      },
      complete: () => console.info('complete')
    });
  }//fim listExpenseRecipe()


   /**
   * Destinado somente a andamento
   */

  /**
     * Funçaão para capturar o Objeto do tipo MatSort dentro do component my-table
     * @returns MatSort
     */
   getMatSortAn(event: any) {
    this.sortAn = event;
    console.log("Ecoando na Ordenação:   " + this.sortAn?.direction);
    // this.listSac();
  }

  getMatPaginatorAn(event: any) {

    this.paginatorAn = event;
    console.log("Ecoando na Paginação:   " + this.paginatorAn?.page);
    // this.listSac();
  }


  getSearchAllAn(event: any) {
    this.termAn = event;
    console.log("Captura da Pesquisa : " + this.termAn);
    // this.listSac();
  }

  getRouterEditAn(event: any) {
    this.editAn = event;
    this.router.navigateByUrl("/sac/alterar/" + this.editAn);

  }

  getRouterDeleteAn(event: any) {
    this.deleteAn = event;
    //   this.remove(this.delete);
  }

  getRouterCreateAn(event: any) {
    this.createAn = event;
    this.router.navigateByUrl("/sac/cadastro");
  }

    /**
 * Listagem de Andamento do SAC com conteudo alterado para adaptar ao componente de my-table
 */
     listSacItem() {
      this.loadingAn = true
      this.sacItem$ = this.sacItemService.listSacItemViewTable(
        this.sacMaster.code,
        this.paginatorAn?.pageIndex ?? 0,
        this.paginatorAn?.pageSize ?? 20,
        this.sortAn?.active ?? 'code',
        this.sortAn?.direction ?? 'asc'
      );
      //seta os valores nos inputs properties da tabela
      this.sacItem$.subscribe({
        next: (item) => {
          this.dataSourceAn = new MatTableDataSource(JSON.parse(JSON.stringify(item)).content);
          this.totalElementsAn = JSON.parse(JSON.stringify(item)).totalElements;
          this.loadingAn = false;
        },
        error: (e) => {
          console.info(e);
          if (e.status == 403)
            this.userSiaService.getOut(this.userSiaService.getLocalStorageUser().code);
        },
        complete: () => console.info('complete')
      });
    }//fim listSacItem()



  openModalClient() {
    this.matDialog.open(ClientListModComponent);
  }

  // /**
  //  * Função para montar um modelo de sac a partir dos elementos html do template
  //  * @return Retorna um modelo de SAC para ser enviado na requisição
  //  * @author Paulo Roberto da Silva
  //  * @since 1
  //  * @version 1.0.0
  //  */
  // createSAC()
  // {

  /**
  *Busca um usuario pelo codigo informado no input
  * @returns  Usuário pelo codigo gerado pelo SIA
  */
  getResponsibleAtt() {
    // this.nameResposibleAtt.nativeElement.value = "";
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeResposibleAtt.nativeElement.value : this.sacMaster.responsibleForTheAttendance;
    if (!value_)
      return;
    this.userSiaService.findId(value_).subscribe({
      next: (item) => {
        if (item)
          this.nameResposibleAtt.nativeElement.value = item.name;
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
*Busca um setor pelo codigo informado no input
* @returns  Setor pelo codigo gerado pelo SIA
*/
  getSectorResponsible() {
    // this.nameSector.nativeElement.value = "";
    let value_ = typeof this.sacMaster == 'undefined' ? this.codeSector.nativeElement.value : this.sacMaster.responsibleSector;
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
*Busca um setor pelo codigo informado no input
* @returns  Setor pelo codigo gerado pelo SIA
*/
  getCareChannel() {
    // this.nameCareChannel.nativeElement.value = "";
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeCareChannel.nativeElement.value : this.sacMaster.careChannel;
    if (!value_)
      return;
    this.careChannelService.findId(value_).subscribe({
      next: (item) => {
        if (item)
          this.nameCareChannel.nativeElement.value = item.name;
        else {

          this.matSnackBar.open("Não há Canal de Atendimento com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar canal de atendimento", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }

  /**
*Busca um setor pelo codigo informado no input de codigo do cliente gerado pelo sistema SIA
* @returns  Setor pelo codigo gerado pelo SIA
*/
  getClient() {
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeClient.nativeElement.value : this.sacMaster.client;
    if (!value_)
      return;
    this.clientService.findId(value_).subscribe({
      next: (client) => {
        if (client) {
          this.codeClient.nativeElement.value = client.code;
          this.nameClient.nativeElement.value = client.name;
          this.erpClient.nativeElement.value = client.clientErp;
          this.cpfCnpjClient.nativeElement.value = client.cpfCnpj;
          this.emailClient.nativeElement.value = client.email;
          this.addressClient.nativeElement.value = client.address;
          this.houseNumberClient.nativeElement.value = client.houseNumber;
          this.complementClient.nativeElement.value = client.complement;
          this.neighborhoodClient.nativeElement.value = client.neighborhood;
          this.zipCodeClient.nativeElement.value = client.zipCode;
          this.cityClient.nativeElement.value = client.city;
          this.stateClient.nativeElement.value = client.state;
          this.nationClient.nativeElement.value = client.nation;
          this.quantityPurchasesClient.nativeElement.value = client.quantityPurchases;
          this.averagePurchaseValueClient.nativeElement.value = client.averagePurchaseValue;
          this.telephoneClient.nativeElement.value = client.telephone;

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
      complete: () => { console.info("complete") }
    });

  }

  /**
*Busca um Representante pelo codigo informado no input de codigo do cliente gerado pelo sistema SIA
* @returns  Representante pelo codigo gerado pelo SIA
*/
  getRepresentative() {
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeRepresentative.nativeElement.value : this.sacMaster.representative;
    if (!value_)
      return;
    this.representaticeService.findId(value_).subscribe({
      next: (rep) => {
        if (rep) {
          this.nameRepresentative.nativeElement.value = rep.name;
        }

        else {

          this.matSnackBar.open("Não há representante com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar representante", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }

  /**
*Busca um Supervisor do representante pelo codigo informado no input de codigo do cliente gerado pelo sistema SIA
*@param idRep contem o codigo do supervisor do representante
* @returns  Supervisor do representante pelo codigo gerado pelo SIA
*/
  getRepresentativeSupervisor() {

    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeRepresentativeSupervisor.nativeElement.value : this.sacMaster.supervisorRepresentative;
    if (!value_)
      return;
    this.representaticeService.findSupervisorId(value_).subscribe({
      next: (sup) => {
        if (sup) {
          this.nameRepresentativeSupervisor.nativeElement.value = sup.name;
        }
        else {

          this.matSnackBar.open("Não há Supervisor do representante com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar Supervisor do representante", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }

  /**
*Busca um Gerente do supervisor do representante pelo codigo informado no input de codigo do cliente gerado pelo sistema SIA
* @returns  Gerente do supervisor do representante pelo codigo gerado pelo SIA
*/
  getRepresentativeSupervisorManager() {
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeRepresentativeSupervisorManager.nativeElement.value : this.sacMaster.managerRepresentative;
    if (!value_)
      return;
    this.representaticeService.findSupervisorManagerId(value_).subscribe({
      next: (man) => {
        if (man) {
          this.nameRepresentativeSupervisorManager.nativeElement.value = man.name;

        }

        else {

          this.matSnackBar.open("Não há Gerente do Supervisor do representante com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar Gerente do Supervisor do representante", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }

  /**
* Busca um Cross Cd pelo codigo informado no input de codigo do cliente gerado pelo sistema SIA
* @returns  Setor pelo codigo gerado pelo SIA
*/
  getCrossCd() {
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeCrossCd.nativeElement.value : this.sacMaster.crossCd;
    if (!value_)
      return;
    this.crossCdService.findId(value_).subscribe({
      next: (cross) => {
        if (cross) {
          this.nameCrossCd.nativeElement.value = cross.name;

        }

        else {

          this.matSnackBar.open("Não há cross cd com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar cross cd", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }


  /**
*Busca um usuario responsavel pela abertura do atendimento pelo codigo informado no input
* @returns  Usuário pelo codigo gerado pelo SIA
*/
  getResponsibleOpenAtt() {
    let value_: any = typeof this.sacMaster == 'undefined' ? this.userSiaService.getLocalStorageUser().code : this.sacMaster.userCreator;
    if (!value_)
      return;
    this.userSiaService.findId(value_).subscribe({
      next: (usu) => {
        console.log("Usuário encontrado  :  " + usu.name);
        if (usu)
          this.nameResAtt = usu.name;
          // this.nameResposibleOpenAtt.nativeElement.value = usu.name;
        else {
          this.matSnackBar.open("Não há Usuário Responsável com o id informado", '', {
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
  getReasonComplaintInternalTable(value_: number = 0) {

    if (value_ == 0)
      return;
    this.reasonComplaintService.findId(value_).subscribe({
      next: (reason) => {
        if (reason) {
          console.log(reason);
        }

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
*Busca um Motorista pelo codigo informado no input
* @returns  Motorista pelo codigo gerado pelo SIA
*/
  getDriver() {
    // this.nameCareChannel.nativeElement.value = "";
    let value_: number = typeof this.sacMaster == 'undefined' ? this.codeDriver.nativeElement.value : this.sacMaster.driver;
    if (!value_)
      return;
    this.driverService.findId(value_).subscribe({
      next: (item) => {
        if (item)
          this.nameDriver.nativeElement.value = item.name;
        else {

          this.matSnackBar.open("Não há motorista com o id informado", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });

        }
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open("Falha ao buscar motorista", '', {
          duration: 5000,
          panelClass: "red-snackbar",
        });
      },
      complete: () => { console.info("complete") }
    });

  }

   /**
*Busca um transportadora pelo codigo informado no input
* @returns  trasnposrtadora pelo codigo gerado pelo SIA
*/
getShippingCompany() {

  let value_: number = typeof this.sacMaster == 'undefined' ? this.codeShippingCompany.nativeElement.value : this.sacMaster.shippingCompany;
  if (!value_)
    return;
  this.shippingCompanyService.findId(value_).subscribe({
    next: (item) => {
      if (item)
        this.nameShippingCompany.nativeElement.value = item.name;
      else {

        this.matSnackBar.open("Não há transportadora com o id informado", '', {
          duration: 5000,
          panelClass: "green-snackbar",
        });

      }
    },
    error: (e) => {
      console.log(e);
      this.matSnackBar.open("Falha ao buscar transportadora", '', {
        duration: 5000,
        panelClass: "red-snackbar",
      });
    },
    complete: () => { console.info("complete") }
  });

}


  // }

  send() {

  }

  finalize() {

  }

  print() {

  }

  back() {
    this.router.navigateByUrl("/sac");
  }

  /**
   * Fução para  preencher um formulario automaticamente
   * de acordo com tipo de create ou update de Usuário
   * @author Paulo Roberto da Silva
   * @version 1
   * @since 1.0.0
   */
  fillForm() {
    this.formGroup = this.formBuilder.group({
      code: [this.sacMaster && this.sacMaster.code ? this.sacMaster.code : null],
      client: [this.sacMaster && this.sacMaster.client ? this.sacMaster.client : null, Validators.required],
      status: [this.sacMaster && this.sacMaster.status ? this.sacMaster.status : this.radioStatus],
      unit: [this.sacMaster && this.sacMaster.unit ? this.sacMaster.unit : null],
      userCreator: [this.sacMaster && this.sacMaster.userCreator ? this.sacMaster.userCreator : this.userSiaService.getLocalStorageUser().code],
      careChannel: [this.sacMaster && this.sacMaster.careChannel ? this.sacMaster.careChannel : null],
      typeContact: [this.sacMaster && this.sacMaster.typeContact ? this.sacMaster.typeContact : null],
      responsibleForTheAttendance: [this.sacMaster && this.sacMaster.responsibleForTheAttendance ? this.sacMaster.responsibleForTheAttendance : null],
      attendanceClassification: [this.sacMaster && this.sacMaster.attendanceClassification ? this.sacMaster.attendanceClassification : this.radioClassification],
      sectorStart: [this.sacMaster && this.sacMaster.sectorStart ? this.sacMaster.sectorStart : null],
      numberComplaints: [this.sacMaster && this.sacMaster.numberComplaints ? this.sacMaster.numberComplaints : null],
      mediaDeliveryChannel: [this.sacMaster && this.sacMaster.mediaDeliveryChannel ? this.sacMaster.mediaDeliveryChannel : null],
      representative: [this.sacMaster && this.sacMaster.representative ? this.sacMaster.representative : null],
      supervisorRepresentative: [this.sacMaster && this.sacMaster.supervisorRepresentative ? this.sacMaster.supervisorRepresentative : null],
      managerRepresentative: [this.sacMaster && this.sacMaster.managerRepresentative ? this.sacMaster.managerRepresentative : null],
      shippingCompany: [this.sacMaster && this.sacMaster.shippingCompany ? this.sacMaster.shippingCompany : null],
      nfeDevolution: [this.sacMaster && this.sacMaster.nfeDevolution ? this.sacMaster.nfeDevolution : null],
      nfeSeriesDevolution: [this.sacMaster && this.sacMaster.nfeSeriesDevolution ? this.sacMaster.nfeSeriesDevolution : null],
      crossCd: [this.sacMaster && this.sacMaster.crossCd ? this.sacMaster.crossCd : null],
      responsibleSector: [this.sacMaster && this.sacMaster.responsibleSector ? this.sacMaster.responsibleSector : null],
      protocol: [this.sacMaster && this.sacMaster.protocol ? this.sacMaster.protocol : ''],
      contactPerson: [this.sacMaster && this.sacMaster.contactPerson ? this.sacMaster.contactPerson : ''],
      note: [this.sacMaster && this.sacMaster.note ? this.sacMaster.note : ''],
      video1: [this.sacMaster && this.sacMaster.video1 ? this.sacMaster.video1 : ''],
      video2: [this.sacMaster && this.sacMaster.video2 ? this.sacMaster.video2 : ''],
      plate: [this.sacMaster && this.sacMaster.plate ? this.sacMaster.plate : ''],
      clientResponsible: [this.sacMaster && this.sacMaster.clientResponsible ? this.sacMaster.clientResponsible : ''],
      otherClientPhone: [this.sacMaster && this.sacMaster.otherClientPhone ? this.sacMaster.otherClientPhone : ''],
      plate2: [this.sacMaster && this.sacMaster.plate2 ? this.sacMaster.plate2 : ''],
      returnClient: [this.sacMaster && this.sacMaster.returnClient ? this.sacMaster.returnClient : ''],
      cellPhoneSms: [this.sacMaster && this.sacMaster.cellPhoneSms ? this.sacMaster.cellPhoneSms : ''],
      nameSms: [this.sacMaster && this.sacMaster.nameSms ? this.sacMaster.nameSms : ''],
      dateCreation: [this.sacMaster && this.sacMaster.dateCreation ? this.sacMaster.dateCreation : null],
      closingDate: [this.sacMaster && this.sacMaster.closingDate ? this.sacMaster.closingDate : null],
      clientContactDate: [this.sacMaster && this.sacMaster.clientContactDate ? this.sacMaster.clientContactDate : null],
      clientReturnDate: [this.sacMaster && this.sacMaster.clientReturnDate ? this.sacMaster.clientReturnDate : null],
      mediaDeliveryDate: [this.sacMaster && this.sacMaster.mediaDeliveryDate ? this.sacMaster.mediaDeliveryDate : null],
      dateProgress: [this.sacMaster && this.sacMaster.dateProgress ? this.sacMaster.dateProgress : null],
      purchaseFrequency: [this.sacMaster && this.sacMaster.purchaseFrequency ? this.sacMaster.purchaseFrequency : null],
      image1: [this.sacMaster && this.sacMaster.image1 ? this.sacMaster.image1 : null],
      image2: [this.sacMaster && this.sacMaster.image2 ? this.sacMaster.image2 : null],
      image3: [this.sacMaster && this.sacMaster.image3 ? this.sacMaster.image3 : null],
      image4: [this.sacMaster && this.sacMaster.image4 ? this.sacMaster.image4 : null],
      excluded: [this.sacMaster && this.sacMaster.excluded ? this.sacMaster.excluded : false],
      averagePurchase: [this.sacMaster && this.sacMaster.averagePurchase ? this.sacMaster.averagePurchase : null],
      driver: [this.sacMaster && this.sacMaster.driver ? this.sacMaster.driver : null]

    });
  }

  /**
* funcção para cadastrar ou atulizar um registro no banco de dados
* @author Paulo Roberto da Silva
* @version 1.2.0
* @sice 1.0.0
*/
  save() {
    if (this.sacMaster && this.sacMaster.code) {
      this.sacService.create(this.formGroup.value).subscribe(
        {
          next: (sacUpdated) => {
            this.matSnackBar.open("Atualizado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/sac");
          },
          error: (e) => {
            this.matSnackBar.open("Erro ao atualizar", e, {
              duration: 5000,
              panelClass: "red-snackbar",
            });
          },
          complete: () => { console.info('complete') }
        });

    }//fim if()
    else {
      this.sacService.create(this.formGroup.value).subscribe(
        {
          next: (sacCreated) => {
            this.matSnackBar.open("Cadastrado com sucesso!", '', {
              duration: 5000,
              panelClass: "green-snackbar",
            });
            this.router.navigateByUrl("/sac");
          },

          error: (e) => {
            this.matSnackBar.open("Erro ao cadastrar", e, {
              duration: 5000,
              panelClass: "red-snackbar",
            });
          },
          complete: () => { console.info('Complete') }
        });

    }//fim else

  }//fim salvar()


}
