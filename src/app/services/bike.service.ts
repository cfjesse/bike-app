import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBikeEntity, IManufacturer } from '../../interfaces/bike.interface';
import { baseUrl } from './app.settings'

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  get bikeList(): Observable<Array<IBikeEntity>> {
    return this.http.get<Array<IBikeEntity>>(`${baseUrl}`)
  }

  updateBike(id: number, data: IBikeEntity): Observable<IBikeEntity> {
    return this.http.put<IBikeEntity>(`${baseUrl}/${id}`, { ...data }, { headers: this.headers })
  }

  insertBike(data: IBikeEntity) {
    return this.http.post<IBikeEntity>(`${baseUrl}`, { ...data }, { headers: this.headers });
  }

  deleteBike(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
}
