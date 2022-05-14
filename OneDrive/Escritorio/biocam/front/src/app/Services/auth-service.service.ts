import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from '../Models/mascota';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      "accept": "application/json",
      "content-type": "application/json"
    })
  }

  register(datos)
  {
    return this.http.post<any>(`${environment.url}/registro`,datos, this.httpOptions).toPromise() as any
  }
}