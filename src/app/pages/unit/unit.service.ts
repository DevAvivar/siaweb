import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private baseURL = environment.api;
  private endpoint = 'unit';

  constructor() { }
}
