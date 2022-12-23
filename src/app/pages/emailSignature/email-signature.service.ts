import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailSignature } from './EmailSignature.model';

@Injectable({
  providedIn: 'root'
})
export class EmailSignatureService {

  private baseURL = environment.api;
  private endpoint = 'collaborator';

 

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
   * 
   * Função para buscar os dados de um colaborador informando sua matricula.
   * @param  registration
   * @returns 
   */
     findDataSignature(registration: number): Observable<EmailSignature> {
      return this.httpClient.get<EmailSignature>(`${this.baseURL}/${this.endpoint}/${registration}`).pipe();
    }

//   testeGet(value: string):Observable<any> {
//     return this.httpClient.get(`${this.baseURL}/teste`);
// }

//   signatureGet(value: string):Observable<any> {
//     return this.httpClient.get<string>(`${this.baseURL}/signature`,{
//       params: new HttpParams().set('value', value)
//     });
// }

//   signaturePost(txt: string): Observable<any> {
//     return this.httpClient.post<string>(`${this.baseURL}/signature/`, txt);
// }



}//fim service
