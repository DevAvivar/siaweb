import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailSignatureService {

  private baseURL = 'http://localhost:3000';
  

  constructor(private httpClient: HttpClient) { }

  testeGet(value: string):Observable<any> {
    return this.httpClient.get(`${this.baseURL}/teste`);
}

  signatureGet(value: string):Observable<any> {
    return this.httpClient.get<string>(`${this.baseURL}/signature`,{
      params: new HttpParams().set('value', value)
    });
}

  signaturePost(txt: string): Observable<any> {
    return this.httpClient.post<string>(`${this.baseURL}/signature/`, txt);
}



}//fim service
