import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { AuthServiceService } from '../Services/auth-service.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  private registroForm: FormGroup;

  constructor(
    private router: Router,
    private load: LoadingController,
    private alert: AlertController,
    private api : AuthServiceService,
    public formBuilder: FormBuilder
  ) { 

  }

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
  }

  registro(){
    console.log("Registro Masacota")
    this.api.register(this.registroForm.value)
    this.router.navigate(["inicio"], {
      replaceUrl: true,
    })
  }

}
