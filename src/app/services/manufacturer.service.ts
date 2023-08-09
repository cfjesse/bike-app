import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IManufacturer } from 'src/interfaces/bike.interface';
import { dropdownUrl } from './app.settings';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

  
  get manufacturer(): Observable<IManufacturer[]> {
    return this.http.get<IManufacturer[]>(`${dropdownUrl}`);
  }
}
