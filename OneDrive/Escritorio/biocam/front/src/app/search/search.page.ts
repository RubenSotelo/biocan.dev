import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { SearchService } from '../Services/search.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private registroForm: FormGroup;
  private id: String

  constructor(
    private router: Router,
    private api : SearchService,
    public alert: AlertController,
    private load: LoadingController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.registroForm = this.formBuilder.group({
      medico: ['', [Validators.required]],
      propietario: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      ingreso: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    })
    this.alerta()
  }
  
  async alerta(){
    const alert =  await this.alert.create({
      header: "BioCan",
      message: "Ingrese Id",
      inputs:[
        {
          name: 'id',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: "Buscar",
          handler: (data) => {
            this.id = data.id
            this.buscar()
          }
        },
        {
          text: "Cancelar",
          handler: () => {
            this.router.navigate(["/inicio"], {
              replaceUrl: true
            })
          }
        }
      ],
      backdropDismiss: false,
      translucent: true
    })
    alert.present()
    
  }

  buscar(){
    this.registroForm.setValue(this.api.buscar(this.id))
  }

  actualizar(){
    this.api.actulizar(this.id, this.registroForm.value)
  }

  eliminar(){
    this.api.eliminar(this.id)
    
    this.router.navigate(["inicio"], {
      replaceUrl: true,
    })
  }
  
  estado(){
    this.router.navigate(["sensores"], {
      replaceUrl: true,
    })
  }

}
