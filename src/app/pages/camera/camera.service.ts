import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camera } from './camera.model';
import { ItemRealData } from './item-real-data.model';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private baseURL = environment.api;
  private endpoint = 'camera';

  private httpOptions = {

    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': JSON.stringify(localStorage.getItem("Authorization"))
    })
  }

  constructor(private httpClient: HttpClient) { }

  /**
* Função para buscar o token que esteja armazenado em localStorage
* @author Paulo Roberto da Silva
* @version 1.2.0
*/
  getToken() {
    return localStorage.getItem("Authorization");
  }

  /**
 * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
 * @param page number O numero da página que se deseja buscar
 * @param size number A quantidade de registros por página que será entregue na consulta
 * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
 * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
 * @returns Observable<Camera[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
 * @author Paulo Roberto da Silva
 * @version 1.2.0
 */
  list(page: number, size: number, sort: any = null, direction: any = null): Observable<Camera[]> {
    if (sort !== null && direction !== null)
      return this.httpClient.get<Camera[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpClient.get<Camera[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort}`).pipe();
  }

  /**
   * Função que busca todas as de cameras que estão ativas na base de dados
   * @returns uma lista de Observable<ItemRealData[]> com as propriedades mapeadas para um Objeto do tipo Camera no servidor
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
  listFilterActiveRealData(): Observable<ItemRealData[]> {
    return this.httpClient.get<ItemRealData[]>(`${this.baseURL}/${this.endpoint}/list/active`).pipe();
  }

  /**
   * Função que busca todas as de cameras que estão ativas na base de dados
   * @returns uma lista de Observable<ItemRealData[]> com as propriedades mapeadas para um Objeto do tipo Camera no servidor
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
  listAllRealData(): Observable<ItemRealData[]> {
    return this.httpClient.get<ItemRealData[]>(`${this.baseURL}/${this.endpoint}/list/all`).pipe();
  }



  /**
 * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
 * @param page number O numero da página que se deseja buscar
 * @param size number A quantidade de registros por página que será entregue na consulta
 * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
 * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
 * @param term string opcional para fazer uma pesquisa em outro endpoint usando a mesma function para ser usada com o component generico de table
 * @returns Observable<UserSia[]> Um observable contendo dados paginados e ordenados referente a uma lista de usuários do sistema
 * @author Paulo Roberto da Silva
 * @version 1.2.0
 * @since 1.0.0
 */
  listCameraPagingAndSearching(page: number, size: number, sort: any = null, direction: any = null, term: string): Observable<Camera[]> {
    // if(term.length > 0)
    return this.httpClient.get<Camera[]>(`${this.baseURL}/${this.endpoint}/search/${term}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
  }

  /**
   * 
   * @param Camera 
   * @returns 
   */
  cadastrar(Camera: Camera): Observable<Camera> {
    return this.httpClient.post<Camera>(`${this.baseURL}/${this.endpoint}`, Camera);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  findId(id: number): Observable<Camera> {
    return this.httpClient.get<Camera>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
   delete(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${this.endpoint}/delete/${id}`);
  }

  
/*
  FUNÇÕES ABAIXO SÃO SOMENTE PARA MANTER O CODIGO ORIGINAL DA MANIPULACAO DAS LEITURAS DE CADA CAMERA ATIVADA
*/

  startCapture(Camera: ItemRealData): Observable<any> {
    return this.httpClient.post<ItemRealData>(`${this.baseURL}/${this.endpoint}/iniciar`, Camera);
  }
  stopCapture(camera: ItemRealData): Observable<ItemRealData> {
    return this.httpClient.post<ItemRealData>(`${this.baseURL}/${this.endpoint}/parar`, camera);
  }
  startCaptureAll(): Observable<ItemRealData> {
    return this.httpClient.get<ItemRealData>(`${this.baseURL}/${this.endpoint}/iniciar/todos`);
  }
  stopCaptureAll(): Observable<ItemRealData> {
    return this.httpClient.get<ItemRealData>(`${this.baseURL}/${this.endpoint}/encerrar/todos`);
  }

  //Inicia a captura de imagem
  captureImage(ItemRealData: ItemRealData): Observable<any> {
    return this.httpClient.post<ItemRealData>(`${this.baseURL}/${this.endpoint}/imagem`, ItemRealData);
  }

  cadastrarItemRealData(Camera: ItemRealData): Observable<ItemRealData> {
    return this.httpClient.post<ItemRealData>(`${this.baseURL}/${this.endpoint}/model/save`, Camera);
  }

}

