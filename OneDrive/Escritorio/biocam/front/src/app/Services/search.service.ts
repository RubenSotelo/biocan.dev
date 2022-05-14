import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from '../Models/mascota';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  [x: string]: any;
  private mascota: Mascota
  constructor(private http: HttpClient) { 

  }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      "content-type": "application/json"
    })
  }

  httpOptions2 = {
    headers: new HttpHeaders({ 
      "accept": "application/json",
      "content-type": "application/json"
    })
  }
  async buscar(id){
    const dato = await this.http.get(`${environment.url}/buscar/${id}`,this.httpOptions).toPromise() as any
    return dato
  }  

  eliminar(id){  
    return this.http.get(`${environment.url}/eliminar/${id}`,this.httpOptions).toPromise() as any

  }

  actulizar(id, datos)
  {
    return this.http.post<any>(`${environment.url}/actulizar/${id}`,datos, this.httpOptions2).toPromise() as any
  }
}
