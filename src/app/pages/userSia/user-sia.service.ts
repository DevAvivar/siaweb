import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserSia } from './UserSia.model';


@Injectable({
  providedIn: 'root'
})
export class UserSiaService {

  private baseURL = environment.api;
  private endpoint = 'user';

  //propriedade para padronizar o envio do token nas requisições HTTP

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': JSON.stringify(localStorage.getItem("token"))
    })
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private matSnackBar: MatSnackBar
  ) { }

  /**
 * Função para buscar o token que esteja armazenado em localStorage
 * @author Paulo Roberto da Silva
 * @version 1.2.0
 */
  getToken() {
    return localStorage.getItem("Authorization");
  }

  /**
   * Função para retornar o usuário que está logado na maquina, armazenado em localStorage
   * @returns O usuário armazenado em localStorage 
   */
  getLocalStorageUser(): UserSia {
    let user: UserSia;
    user = JSON.parse( localStorage.getItem('userLogged')! );
    console.log("USUARIO LOGADO:   ",user.name);
    return user;
  }

  /**
    * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
    * @param page number O numero da página que se deseja buscar
    * @param size number A quantidade de registros por página que será entregue na consulta
    * @param sort string Um texto com o nome da coluna do Objeto de UserSiaDTO que representará a ordenação de acordo com o mesmo
    * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
    * @returns Observable<UserSia[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
    * @author Paulo Roberto da Silva
    * @version 1.0.0
    */
  list(page: number, size: number, sort: any = null, direction: any = null): Observable<UserSia[]> {
    if (sort !== null && direction !== null)
      return this.httpClient.get<UserSia[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
    return this.httpClient.get<UserSia[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}`).pipe();
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
  listUserSiaPagingAndSearching(page: number, size: number, sort: any = null, direction: any = null, term: string): Observable<UserSia[]> {
    // if(term.length > 0)
    return this.httpClient.get<UserSia[]>(`${this.baseURL}/${this.endpoint}/search/${term}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();

    // return this.httpClient.get<UserSia[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
  }

  cadastrar(UserSia: UserSia): Observable<UserSia> {
    return this.httpClient.post<UserSia>(`${this.baseURL}/${this.endpoint}`, UserSia);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  findId(id: number): Observable<UserSia> {
    return this.httpClient.get<UserSia>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
  }


  delete(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${this.endpoint}/delete/${id}`);
  }

  login(dataLogin: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/${this.endpoint}/login`, dataLogin);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  logout(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/${this.endpoint}/logout/${id}`);
  }

  /**
   * 
   * @param dataPassword 
   * @returns 
   */
  updatePassword(dataPassword: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/${this.endpoint}/update/password`, dataPassword);
  }

  // /**
  //  * Função para buscar um usuário já autenticado no sistema
  //  * @returns 
  //  */
  // loadingUserSiaLoged(): Observable<UserSia>{
  //   return this.httpClient.get<UserSia>(`${this.baseURL}/${this.endpoint}/logado`);
  // }

  permissionCreateOrUpdate(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/${this.endpoint}/cadastro`);
  }

  /**
   * 
   * @param id 
   */
  getOut(id: number) {
    this.logout(id).subscribe(
      {
        next: (res) => {
          console.log("resposta do servidor:   " + res);
          localStorage.removeItem("userLogged");//remove a chave
          localStorage.removeItem("token");//remove a chave
          this.matSnackBar.open("Logout feito com sucesso.", '', {
            duration: 5000,
            panelClass: "green-snackbar",
          });
          this.router.navigateByUrl('/login');
          // window.location.reload();

        },
        error: () => {
          localStorage.removeItem("userLogged");//remove a chave
          localStorage.removeItem("token");//remove a chave
          this.matSnackBar.open("Acesso Negado.\nSua Sessão Expirou.", '', {
            duration: 5000,
            panelClass: "black-snackbar",
          });
          this.router.navigateByUrl('/login');
          // window.location.reload();
        },
        complete: () => { console.info('complete') }


        // this.router.navigateByUrl("/principal");
      });
  }//fim getOut()





}
