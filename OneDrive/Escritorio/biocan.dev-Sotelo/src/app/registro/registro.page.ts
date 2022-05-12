import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private load: LoadingController,
    private alert: AlertController,
    private api : AuthServiceService
  ) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      medico: new FormControl('', {
        validators: [Validators.required]
      }),
      propietario: new FormControl('', {
        validators: [Validators.required]
      }),
      nombre: new FormControl('', {
        validators: [Validators.required]
      }),
      edad: new FormControl('', {
        validators: [Validators.required]
      }),
      peso: new FormControl('', {
        validators: [Validators.required]
      }),
      dataIngreso: new FormControl('', {
        validators: [Validators.required]
      }),
      sexo: new FormControl('', {
        validators: [Validators.required]
      }),
    })
  }

  async register(){
    const l = await this.load.create({
      animated: true,
      backdropDismiss: false,
      keyboardClose: false,
      message: "Estamos creando tu cuenta ...",
      translucent: true
    })
    l.present()
    this.api.register(
      this.registerForm.get('medico').value,
      this.registerForm.get('propietario').value,
      this.registerForm.get('nombre').value,
      this.registerForm.get('edad').value,
      this.registerForm.get('peso').value,
      this.registerForm.get('dataIngreso').value,
      this.registerForm.get('sexo').value,
    ).then(async (r) => {
      l.dismiss()
      const al = await this.alert.create({
        header: "BioCan",
        message: "Cuenta creada exitosamente",
        buttons: [
          {
            text: "Inicia sesión",
            handler: () => {
              this.router.navigate(["/sensores"], {
                replaceUrl: true
              })
            }
          }
        ],
        backdropDismiss: false,
        translucent: true
      })
      al.present()
    }, async error => {
      console.log(error);
      l.dismiss()
      const al = await this.alert.create({
        header: "Error",
        message: error.error.errors.email ? error.error.errors.email[0] : "Error al intentar establecer conexión con nuestros servidores",
        buttons: [
          "Entendido"
        ],
        backdropDismiss: false,
        translucent: true
      })
      al.present()
    }).catch(async err => {
      l.dismiss()
      const al = await this.alert.create({
        header: "Error",
        message: "Error al intentar establecer conexión con nuestros servidores",
        buttons: [
          "Entendido"
        ],
        backdropDismiss: false,
        translucent: true
      })
      al.present()
    })

  }

  
  back(){
    this.router.navigate(["inicio"], {
      replaceUrl: true,
    })
  }

  
}