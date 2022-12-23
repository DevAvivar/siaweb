import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSiaService } from '../userSia/user-sia.service';
import { Sac } from './Sac.model';

@Injectable({
  providedIn: 'root'
})
export class SacService {

  private baseURL = environment.api;
  private endpoint = 'sac';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private matSnackBar: MatSnackBar,
    private userSiaService: UserSiaService
  ) { }


  /**
   * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
   * @param page number O numero da página que se deseja buscar
   * @param size number A quantidade de registros por página que será entregue na consulta
   * @param sort string Um texto com o nome da coluna do Objeto de SacDTO que representará a ordenação de acordo com o mesmo
   * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
   * @returns Observable<Sac[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
   * @author Paulo Roberto da Silva
   * @version 1.0.0
   */
  list(
    protocol: string,//contem o valor do input
    client: string, //contem o valor do input
    dateinitial: any, //contem o valor do datepicker
    datefinal: any, //contem o valor do datepicker
    user: number, //contem o valor do input
    product: number, //contem o valor do input
    complaint: number, //contem o valor do input
    sector: number, //contem o valor do input
    nfe: string, //contem o valor do input
    devolution: string, //contem o valor do input
    code: number, //contem o valor do input
    status: any,//contem um array de boolean vindo dos checkboxes
    classification: any,//contem um array de boolean vindo dos checkboxes
    noreturn: boolean, //contem o valor do checkbox
    unitLogged: number, //envia o codigo da unidade que o usuario logado pertence armazenada em localStorage
    page: number,
    size: number,
    sort: any = null,
    direction: any = null): Observable<Sac[]> {
    //captura o valor da unidade logado do usuario
    unitLogged = this.userSiaService.getLocalStorageUnit().code;
    console.log("unidade: " + unitLogged);
    return this.httpClient.get<Sac[]>(
      `${this.baseURL}/${this.endpoint}?protocol=${protocol}&client=${client}&dateinitial=${dateinitial}&datefinal=${datefinal}&user=${user}&product=${product}&complaint=${complaint}&sector=${sector}&nfe=${nfe}&devolution=${devolution}&code=${code}&${status}&${classification}&noreturn=${noreturn}&unitLogged=${unitLogged}&page=${page}&size=${size}`).pipe();
  }

  /**
* 
* @param id 
* @returns Sac
*/
  findId(id: number): Observable<Sac> {
    return this.httpClient.get<Sac>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }

/**
 * Função para cadastrar um novo atendimento SAC
 * @param sac intancia do modelo que se deseja cadastrar
 * @returns o modelo de SAC que foi criado 
 */
  create(sac: Sac): Observable<Sac> {
    return this.httpClient.post<Sac>(`${this.baseURL}/${this.endpoint}`, sac);
  }
}
