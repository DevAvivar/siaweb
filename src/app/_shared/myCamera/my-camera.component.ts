import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ItemRealData } from 'src/app/pages/camera/item-real-data.model';
import { UserSia } from 'src/app/pages/userSia/UserSia.model';
import { environment } from 'src/environments/environment';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { interval, Observable } from 'rxjs';
import { CameraService } from 'src/app/pages/camera/camera.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogReadFailureComponent } from '../dialogReadFailure/dialog-read-failure.component';
import { DialogCameraShiftSelectComponent } from '../dialogCameraShiftSelect/dialog-camera-shift-select.component';
import { DialogElementsExampleDialogComponent } from '../dialogElementsExampleDialog/dialog-elements-example-dialog.component';


@Component({
    selector: 'app-my-camera',
    templateUrl: './my-camera.component.html',
    styleUrls: ['./my-camera.component.scss']
})
export class MyCameraComponent implements OnInit, AfterViewInit {

    private baseURL = environment.ws;
    private endpointAll = 'all';
    private endpointConnected = 'connected';
    private endpointImg = 'img';
    private endpointImgPolygon = 'img/polygon';
    @Input() camera!: ItemRealData;
    @Input() permissionActionButtons: boolean = true;
    @Output() colorClass = new EventEmitter();
    subject!: WebSocketSubject<any>;//definida para receber uma conexao com o servidor websocket e manipular os dados de retorno do mesmo
    subjectConnection!: WebSocketSubject<any>;//definida para receber uma conexao com websocket para consultar se a camera está conectada na rede
    stopButton: any;//controla a parada da leitura
    startButton: any;//controla o inicio da leitura 
    listStatusInsert: any[] = [];//controla a mudança de cor no card da camera
    responseWebSocket: any[] = [];//exibe no template os dados vindo do response do websocket
    listResponseWebSocket: any[] = [];//exibe a lista de 5 ultimas leituras no template vindo do websocket
    listResponseFailure: any[] = [];//recebe uma lista de barras com falha na leitura.
    loading!: boolean;
    obsA!: any;
    obsB!: any;
    obsC!: any;
    subA!: any;
    subB!: any;
    subC!: any;
    responsePing: any[] = [];
    obs$!: Observable<any>;
    wsImg!: string;
    wsConnectedImg!: WebSocketSubject<any>;
    wsConnectedImgPolygon!: WebSocketSubject<any>;
    points!: string;

    /*
    Propriedades para tratar o nivel de permissão do Usuário logado 
    em relação a ativação dos botoes de ação do card da camera component
    */
    localStorageKey: string = "userLogged";
    levelUSER = "USER";
    userRole: any = 'undefined';


    constructor(
        private itemService: CameraService,
        private matSnackBar: MatSnackBar,
        public dialog: MatDialog
    ) { }

    //captura o elemento no DOM
    @ViewChild('card', { static: true })
    card!: ElementRef

    /**
     * 
     */
    ngOnInit(): void {
        this.obs$ = interval(1000);
        this.connectionWebSockets();
        this.connectionWebSocketsTwo();
        this.connectionWsImg();
        this.listenStatusPing();
        this.listen();
        this.statusReading();
        this.listenWsImg();
        this.isPermissionUSER();
    }

    ngAfterViewInit() {

    }

    getColorClass() {
        this.colorClass.emit(this.listStatusInsert[0])
        console.log(this.listStatusInsert[0]);
    }

    /**
   * Criando uma conexão com websocket usando rxjs puro
   * podendo após essa conexão manipular envio e recebimento de dados do servidor
   * @param state Recebe uma propriedade do tipo WebSocketSubject<any> para ser manipulado em outras partes do component onde foi instanciada
   * @author Paulo Roberto da Silva
   * @version 1.1.0
   */
    connectionWebSockets() {
        if (!this.camera.camStarted)
            return;

        this.subject = webSocket({
            binaryType: 'arraybuffer',
            url: `${this.baseURL}/${this.endpointAll}`,
            serializer: (msg: Uint16Array) => {
                const offset = msg.byteOffset;
                const length = msg.byteLength;
                return msg.buffer.slice(offset, offset + length);
            },
            deserializer: msg => msg.data
        });
    }

    /**
* Criando uma conexão com websocket usando rxjs puro
* podendo após essa conexão manipular envio e recebimento de dados do servidor
* @param state Recebe uma propriedade do tipo WebSocketSubject<any> para ser manipulado em outras partes do component onde foi instanciada
* @author Paulo Roberto da Silva
* @version 1.1.0
*/
    connectionWebSocketsTwo() {
        this.subjectConnection = webSocket({
            binaryType: 'arraybuffer',
            url: `${this.baseURL}/${this.endpointConnected}`,
            serializer: (msg: Uint16Array) => {
                const offset = msg.byteOffset;
                const length = msg.byteLength;
                return msg.buffer.slice(offset, offset + length);
            },
            deserializer: msg => msg.data
        });
    }

    /**
     * Criando uma conexão com websocket usando rxjs puro
     * podendo após essa conexão manipular envio e recebimento de dados do servidor
     * @param state Recebe uma propriedade do tipo WebSocketSubject<any> para ser manipulado em outras partes do component onde foi instanciada
     * @author Paulo Roberto da Silva
     * @version 1.1.0
     */
    connectionWsImg() {
        if (!this.camera.camStarted)
            return;

        this.wsConnectedImg = webSocket({
            binaryType: 'arraybuffer',
            url: `${this.baseURL}/${this.endpointImg}`,
            serializer: (img: Uint16Array) => {
                const offset = img.byteOffset;
                const length = img.byteLength;
                return img.buffer.slice(offset, offset + length);
            },
            deserializer: img => img.data
        });
    }

    /**
* Criando uma conexão com websocket usando rxjs puro
* podendo após essa conexão manipular envio e recebimento de dados do servidor
* @param state Recebe uma propriedade do tipo WebSocketSubject<any> para ser manipulado em outras partes do component onde foi instanciada
* @author Paulo Roberto da Silva
* @version 1.1.0
*/
    //   connectionWsImgPolygon()
    //   {
    //       if(! this.camera.camStarted)
    //        return;

    //       this.wsConnectedImgPolygon = webSocket({
    //           binaryType: 'arraybuffer',
    //           url: `${this.baseURL}/${this.endpointImgPolygon}`,
    //           serializer: (img: Uint16Array)=>{
    //              const offset = img.byteOffset;
    //              const length = img.byteLength;
    //              return img.buffer.slice(offset, offset + length);
    //           },
    //           deserializer: img => img.data
    //       });
    //   }


    /**
* Função para enviar um modal para mostrar ao operador que houve
* 5 falhas na leitura consecutivas
* 
* @param device 
* @author Paulo Roberto da Silva
* @version 
*/
    showFailureNotification() {
        let count = 0;
        for (let i = 0; i < this.listResponseFailure.length; i++) {
            if (this.listResponseFailure.length > 0) {
                if (this.listResponseFailure[i][2].includes("Falha"))
                    count++;
            }

        }
        if (count == 5) {
            for (let i = 0; i < 5; i++)
                this.listResponseFailure.pop();
            this.dialog.open(DialogReadFailureComponent, { data: { device: this.camera } });
        }

    }

    /**
     * Função para escutar o response do websocket e verificar se a camera ainda está online
     * Controlando assim as cores do card da camera entre vermelho, amarelo ou verde
     * 
     * @returns 
     * @author Paulo Roberto da Silva
     * @version 1.1.0
     */
    listenStatusPing() {
        if (!this.camera.camStarted)
            return;

        this.subjectConnection.subscribe(
            {
            next: (msg) => {
                // let responsePing = msg.split("=>");
                //setando o valor do atributo para ser usado na função de manipulacao da cor do card da camera
                this.responsePing = msg.split("=>");
                if (this.responsePing[1] == this.camera.camIp) {
                    if (this.responsePing[0].includes("perdida"))
                        this.listStatusInsert[0] = 'colorRed';
                }
            },
            error: (err) => {
                console.log("ERROR: " + err); // Called if at any point WebSocket API signals some kind of error.
            },
            complete: () => {
                console.log("Complete status ping");
            }
    });

    }

    /**
     * Função para ficar ouvindo o response do websocket 
     * @returns 
     * @author Paulo Roberto da Silva
     * @version 1.1.0
     */
    listen() {
        if (!this.camera.camStarted)
            return;

        this.subject.subscribe(
        {
        next: (msg) => {
            let resImg = "";
            if(msg.split("=>").length == 2)
        this.wsImg = msg.split("=>")[0];

        let res = msg.split("=>");//Tranforma a string em array
        if (msg.includes("Aguardando")) {
            this.responseWebSocket.unshift(res);
            this.listStatusInsert[0] = 'colorYellow';
        }
        else if (msg.includes(this.camera.camIp)) {
            //seta a nova cor de acordo com o tempo de resposta
            this.listStatusInsert[0] = this.getColorDinamic(this.responseWebSocket[0][3]);
            this.responseWebSocket.unshift(res);
            this.listResponseWebSocket.unshift(res);//adiciona na primeira posição do array
            this.listResponseFailure.unshift(res);//adiciona na primeira posição do array auxiliar para controlar as notificaçoes de falha na leitura

            //dipara um Alert para o operador avisando q já foram 5 leituras com falha 
            //limita a mostrar apenas 5 ultimos registros 
            if (this.listResponseWebSocket.length > 5)
                this.listResponseWebSocket.pop();//remove o ultimo item do array 

            if (this.listResponseFailure.length > 5)
                this.listResponseFailure.pop();//remove o ultimo registro do array auxiliar para notificar o operador

            this.showFailureNotification();//verifica se os dados estão com falhas consecutivas
        }

    },
        error: (err) => {
    console.log("ERROR NEW: " + err), // Called if at any point WebSocket API signals some kind of error.
        this.listStatusInsert[0] = 'colorRed';
        },
    complete: () => {
        console.log('complete'); // Called when connection is closed (for whatever reason).
        this.listStatusInsert[0] = 'colorRed';
        setTimeout(() => {
            window.location.reload();
        }, 60000);
        // window.location.reload();
    } 
    });
    }

/**
 * 
 * @returns 
 */
listenMultiplex()
{
    if (!this.camera.camStarted)
        return;

    this.obsA = this.subject.multiplex(

        () => ({ subscribe: this.camera }), // When server gets this message, it will start sending messages for 'A'...
        () => ({ unsubscribe: this.camera }), // ...and when gets this one, it will stop.
        message => message.includes(this.camera.camIp)  // If the function returns `true` message is 
    );

    this.obsA.subscribe(
        {
            next: (msg: any) => {
                let res = msg.split("=>");//Tranforma a string em array
                if (msg.includes(this.camera.camIp)) {
                    // console.log("response barras: "+res);
                    this.responseWebSocket.unshift(res);
                    this.listResponseWebSocket.unshift(res);//adiciona na primeira posição do array
                    this.listResponseFailure.unshift(res);//adiciona na primeira posição do array auxiliar para controlar as notificaçoes de falha na leitura

                    //dipara um Alert para o operador avisando q já foram 5 leituras com falha 
                    //limita a mostrar apenas 5 ultimos registros 
                    if (this.listResponseWebSocket.length > 5)
                        this.listResponseWebSocket.pop();//remove o ultimo item do array 

                    if (this.listResponseFailure.length > 5)
                        this.listResponseFailure.pop();//remove o ultimo registro do array auxiliar para notificar o operador

                    this.showFailureNotification();//verifica se os dados estão com falhas consecutivas
                }

            },
            error: (err: any) => {
                console.log("ERROR NEW: " + err), // Called if at any point WebSocket API signals some kind of error.
                    this.listStatusInsert[0] = 'colorRed';

            },
            complete: () => {
                console.log('complete'); // Called when connection is closed (for whatever reason).
                this.listStatusInsert[0] = 'colorRed';
                setTimeout(() => {
                    window.location.reload();
                }, 60000);
                // window.location.reload();
            }
        });//fim subscribe()

}//fim listenMultiplex()

/**
 * Função para iniciar a leitura da camera
 * @author Paulo Roberto da Silva
 * @version 1.1.0
 */
startRead() {
    // this.loading = true;
    if (this.camera.camShift <= 0 && !this.camera.camStarted && (this.camera.camProductionDate == null || this.camera.camProductionDate == "")) {
        this.dialog.open(DialogCameraShiftSelectComponent, { data: { item: this.camera } });
    }

    else if (this.camera.camShift == 1 || this.camera.camShift == 2) {
        this.loading = true;

        this.itemService.startCapture(this.camera).subscribe(
            {
                next: (leituraIniciada) => {
                    if (leituraIniciada == true) {
                        this.matSnackBar.open(" Leitura iniciada com sucesso!", '', {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.startButton = leituraIniciada;
                        this.loading = false;
                        location.reload();
                    } //fim if()
                    else if (leituraIniciada == false) {
                        // this.loading = false;
                        this.loading = false;
                        this.dialog.open(DialogElementsExampleDialogComponent);
                    }
                },
                error: (error) => {
                    //se entrar nesse bloco é pq o retorno é um tipo diferente do que está definido na API
                    this.matSnackBar.open("Erro ao iniciar a leitura", '', {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                    // this.loading = false;
                    this.loading = false;
                    // location.reload();
                },
                complete: () => { console.info('Complete') }
            });
    }

}

/**
 * Função para 
 * @author Paulo Roberto da Silva
 * @version 1.1.0 
 */
stopRead() {
    this.loading = true;
    this.itemService.stopCapture(this.camera).subscribe(
        {
            next: () => {
                this.matSnackBar.open(" Leitura encerrada com sucesso!", '', {
                    duration: 2000,
                    panelClass: "green-snackbar",
                });
                this.loading = false;
                window.location.reload();
            },
            error: () => {
                this.matSnackBar.open("Erro ao encerrar a leitura", '', {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
                this.loading = false;
                // window.location.reload();
            },
            complete: () => { console.info('Complete') }
        });//fim subscribe()
}

/**
 * Função para formatar a saida de uma data informada
 * @param datetime String informada com a data em formato americano 
 * @param value numero para ser somado quando houver alguma diferença de horário em relação ao fuso
 * @returns string
 */
dataTimeFormatPtbr(datetime: string, value: any = 0) {
    // return new Date(this.dateTimeStringFormat(datetime)).toLocaleString();
    let dt = new Date(this.dateTimeStringFormat(datetime));
    dt.setHours(dt.getHours() + value);
    return dt.toLocaleString();
}

/**
    *Função que trata para o formato de datetime SQL para o Objeto do tipo Date() do TypeScript
    * @param datetime
    * @returns
    * @author Paulo Roberto da Silva
    * @version 1.0.0
    */
dateTimeStringFormat(datetime: string) {
    let regex = /T/gi;
    let indexpoint = datetime.indexOf(".");
    datetime = datetime.substring(0, indexpoint);
    datetime = datetime.replace(regex, " ");
    return datetime;
}

/**
 * 
 * @param param 
 * @returns 
 */
viewProductionDate(param: any): string
{
    param = param.split('-').reverse().join('/');
    return param;
}

/**
 *Função para calcular a diferença em segundos entre algum datetime e o datetime nesse instante
 *
 * @param dateBigger
 * @param dateSmaller
 * @return
 * @author Paulo Roberto da Silva
 * @version 1.0.0
 */
diffDateTime(dateSmaller: Date): number {
    let result = 0;
    let diff = new Date().getTime() - new Date(dateSmaller).getTime();
    // let diff = new Date().getTime() - new Date(this.dateTimeStringFormat(dateSmaller)).getTime();
    result = diff / 1000; // + 10800;//10800 são 3 horas da diferença de fuso horário, OBS: foi deixado a coluna da tabela barras datetime sem timezone modelagem do agrosys
    result = parseFloat(result.toFixed(2));
    return result;
}

/**
* Função para modificar a cor do card da camera de acordo com um timestamp informado
* pelo trafego pego pelo websocket 
* @param responseData É um array vindo do response do servidor WebSocket que sua posicao contém um  timestamp
* @returns 
*/
getColorDinamic(responseData: any): string {
    if (this.diffDateTime(responseData) >= 5)
        return "colorYellow"; //mantem a cor amarela 
    return "colorGreen";// caso a diferença  for menor que 3 segundos retorna verde 
}

/**
 * Altera a cor da propriedade que controla a cor do card da camera de acordo com o time
 */
statusReading()
{
    if (!this.camera.camStarted)
        return;
    this.obs$.subscribe(() => {
        if (this.responsePing[0].includes("perdida"))
            this.listStatusInsert[0] = 'colorRed';
        else
            this.listStatusInsert[0] = this.getColorDinamic(this.responseWebSocket[0][3]);
    });
}

/**
 * Função para capturar todas a imagens vinda do websocket direto da camera
 * @author Paulo Roberto da Silva
 * @version 1.2.0
 */
listenWsImg(){
    if (!this.camera.camStarted)
        return;

    this.wsConnectedImg.subscribe(
        (img) => {
            let ipCamera = img.substring(0, img.indexOf("=>"));
            if (!ipCamera.includes(this.camera.camIp))
                return;
            let subImg = img.substring(img.indexOf("data"), img.length);
            this.wsImg = subImg;
        },
        (err) => {
            console.log("ERROR NO WEBSOCKET IMG: " + err); // Called if at any point WebSocket API signals some kind of error.

        },
        () => {
            console.log('complete'); // Called when connection is closed (for whatever reason).  
        }
    );
    return "";
}


/**
* Função para capturar todas a imagens vinda do websocket direto da camera
* @author Paulo Roberto da Silva
* @version 1.2.0
*/
//  listenWsImgPolygon(){
//     if(! this.camera.camStarted)
//         return;

//     this.wsConnectedImgPolygon.subscribe(
//         (polygon)=>{
//             console.log("Polygon ***  " +polygon);
//             let ipCamera = img.substring(0,img.indexOf("=>"));
//             if(! ipCamera.includes(this.camera.camIp))
//                 return;
//             let subImg = img.substring(img.indexOf("data"),img.length);
//             this.wsImg = subImg;

//         },

//         (err) =>{
//             console.log("ERROR NO WEBSOCKET IMG POLYGON: "+err); // Called if at any point WebSocket API signals some kind of error.

//         },
//         () =>{

//                 console.log('complete'); // Called when connection is closed (for whatever reason).              

//         } 
//     );       
//         return "";
// }


/**
  * Função para verificar se existe algum usuário logado nesse cliente com permissão necessária para manipular os botões de ação do card de 
  *
  */
isPermissionUSER()
{
    let user: UserSia = JSON.parse(localStorage.getItem(this.localStorageKey)!);
    //SE O NIVEL DE PERMISSÃO FOR MENOR QUE ADMINISTRADOR
    this.userRole = user.roles;
    if (this.userRole === this.levelUSER)
        this.permissionActionButtons = false;
    else
        this.permissionActionButtons = true;
}

//     /**
//    * Função para ordernação de um Observable de cameras para o inicio da fila de acordo com uma camera passada como parametro. 
//    * @param cameraFirst Contém a camera que se deseja colocar no inicio da fila do grid
//    * @author Paulo Roberto da Silva
//    * @since 1.2.0
//    * @version 1.2.0
//    */
//          orderViewGridCamera(cameraFirst: ItemRealData) {
//             this.cameras$ = this.cameras$.pipe(
//                 map((cam) => {
//                     cam.sort((a) => {
//                         return a.camCode == cameraFirst.camCode ? -1 : 0;
//                     });
//                     return cam;
//                 })
//             );
//         }


}
