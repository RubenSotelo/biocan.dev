import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from '../Models/mascota';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public mascota:Mascota = null

  constructor(
    private http: HttpClient
  ) {
    
  }

  async register(medico: String, propietario: String, nombre: String, edad: String, peso: String, dataIngreso: String, sexo: String,)
  {
    const pet = await this.http.post(`${environment.url}/auth/signup`, {
      nombre: nombre,
      edad: edad,
      peso: peso,
      medico: medico,
      dataIngreso: dataIngreso,
      sexo: sexo,
      propietario: propietario
    }, 
    {
      headers:{
        "accept": "application/json",
        "content-type": "application/json"
      }
    }).toPromise() as any
    return pet
  }


}