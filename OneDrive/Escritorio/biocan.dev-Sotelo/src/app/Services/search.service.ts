import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  [x: string]: any;

  constructor() { 

  }

  async get(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        "content-type": "application/json"

      })
    }
    const pet = await this.http.get(`${environment.url}/`,httpOptions).toPromise() as any
    return pet
  }  

  async eliminar(id){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        "content-type": "application/json"
      })
    }
    const pet = await this.http.delete(`${environment.url}//eliminar/${id}`,httpOptions).toPromise() as any
    return pet
  }
}
