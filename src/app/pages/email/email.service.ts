import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from './Email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseURL = environment.api;
  private endpoint = 'emails';

  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': JSON.stringify(localStorage.getItem("token"))
    })
  }

  constructor(private httpClient: HttpClient) { }

   /**
  * Função para buscar o token que esteja armazenado em localStorage
  * @author Paulo Roberto da Silva
  * @version 1.2.0
  */
    getToken()
    {
      return localStorage.getItem("Authorization");
    }
  

      /**
   * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
   * @param page number O numero da página que se deseja buscar
   * @param size number A quantidade de registros por página que será entregue na consulta
   * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
   * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
   * @returns Observable<Emails[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
   * @author Paulo Roberto da Silva
   * @version 1.0.0
   */
  list(page: number, size: number, sort: any = null, direction: any = null): Observable<Email[]>{
    if(sort !== null && direction !== null)
      return this.httpClient.get<Email[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpClient.get<Email[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}`).pipe();
  }


  //   listar(queryBuilder: QueryBuilder): Observable<Page<Emails>> {

  //     return this.httpClient
  //     .get<Emails[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
  //     .pipe(
  //         map(response => <Page<Emails>>Page.fromResponse(response))
  //     );
  // }

   /**
   * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
   * @param page number O numero da página que se deseja buscar
   * @param size number A quantidade de registros por página que será entregue na consulta
   * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
   * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
   * @param term string opcional para fazer uma pesquisa em outro endpoint usando a mesma function para ser usada com o component generico de table
   * @returns Observable<Emails[]> Um observable contendo dados paginados e ordenados referente a uma lista de usuários do sistema
   * @author Paulo Roberto da Silva
   * @version 1.2.0
   * @since 1.0.0
   */
    listEmailsPagingAndSearching(page: number, size: number, sort: any = null, direction: any = null, term: string ): Observable<Email[]>{
      // if(term.length > 0)
        return this.httpClient.get<Email[]>(`${this.baseURL}/${this.endpoint}/search/${term}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
  
      // return this.httpClient.get<UserSia[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    }

    // /**
    //  * Função que busca todas as de cameras que estão cadastradas na base de dados
    //  * @returns Json
    //  */
    // listAll(): Observable<Emails[]>{
    //   return this.httpClient.get<Emails[]>(`${this.baseURL}/${this.endpoint}/todos`).pipe();
    // }

    // listar(queryBuilder: QueryBuilder): Observable<Page<Emails>> {

    //     return this.httpClient
    //     .get<Emails[]>(`${this.baseURL}/${this.endpoint}/todos?${queryBuilder.buildQueryString()}`, {observe: 'response'})
    //     .pipe(
    //         map(response => <Page<Emails>>Page.fromResponse(response))
    //     );
    // }

    cadastrar(Emails: Email): Observable<Email> {
        return this.httpClient.post<Email>(`${this.baseURL}/${this.endpoint}`, Emails);
    }

    findId(id: number): Observable<Email> {
        return this.httpClient.get<Email>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    delete(id: number):Observable<any> {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/delete/${id}`);
    }
}
